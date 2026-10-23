-- =====================================================================
-- Warga Kasuari · pengamanan (jalankan SETELAH schema.sql). Sudah terpasang di project produksi.
-- Hak akses per menu ditegakkan di server, fungsi bantu di skema privat, log aktivitas.
-- =====================================================================
create schema if not exists privat;
revoke all on schema privat from public, anon;
grant usage on schema privat to authenticated;

create or replace function privat.peran_saya() returns text language sql stable security definer set search_path = public as $$
  select peran from public.profil where user_id = auth.uid() $$;
create or replace function privat.warga_saya() returns text language sql stable security definer set search_path = public as $$
  select warga_id from public.profil where user_id = auth.uid() $$;
create or replace function privat.pengurus_saya() returns jsonb language sql stable security definer set search_path = public as $$
  select d.data from public.profil p join public.dokumen d on d.koleksi = 'pengurus' and d.id = p.pengurus_id
  where p.user_id = auth.uid() and p.peran = 'pengurus' and coalesce(d.data->>'aktif', 'true') <> 'false' $$;
create or replace function privat.izin(area text) returns int language plpgsql stable security definer set search_path = public as $$
declare pg jsonb; iz jsonb; v text;
begin
  if privat.peran_saya() = 'pemilik' then return 2; end if;
  pg := privat.pengurus_saya(); if pg is null then return 0; end if;
  select r.data->'izin' into iz from public.dokumen r where r.koleksi = 'peran' and r.id = pg->>'peranId';
  if iz is null then return 0; end if;
  v := coalesce(iz->>area, case when area in ('pengeluaran', 'laporan') then iz->>'kas' end);
  return case v when 'kelola' then 2 when 'lihat' then 1 else 0 end;
end $$;
create or replace function privat.boleh_baca(k text, d jsonb) returns boolean language plpgsql stable security definer set search_path = public as $$
declare pg jsonb;
begin
  if privat.peran_saya() = 'pemilik' then return true; end if;
  pg := privat.pengurus_saya(); if pg is null then return false; end if;
  if k in ('warga', 'pengumuman', 'nomorDarurat', 'pengaturan', 'peran', 'pengurus', 'darurat') then return true; end if;
  if k in ('iuran', 'keluhan') and coalesce(pg->>'wargaId', '') <> '' and d->>'wargaId' = pg->>'wargaId' then return true; end if;
  return case
    when k = 'iuran'   then greatest(privat.izin('iuran'), privat.izin('kas'), privat.izin('laporan'), privat.izin('ringkasan')) >= 1
    when k = 'kas'     then greatest(privat.izin('kas'), privat.izin('pengeluaran'), privat.izin('laporan')) >= 1
    when k = 'keluhan' then greatest(privat.izin('keluhan'), privat.izin('ringkasan')) >= 1
    when k = 'surat'   then privat.izin('surat') >= 1
    when k in ('tamu', 'paket', 'titip', 'kejadian', 'jaga') then privat.izin('keamanan') >= 1
    else false end;
end $$;
create or replace function privat.boleh_tulis(k text, d jsonb) returns boolean language plpgsql stable security definer set search_path = public as $$
begin
  if privat.peran_saya() = 'pemilik' then return true; end if;
  if privat.pengurus_saya() is null then return false; end if;
  return case
    when k = 'kas'        then privat.izin('kas') = 2 or (privat.izin('pengeluaran') = 2 and coalesce(d->>'jenis', 'keluar') <> 'masuk')
    when k = 'warga'      then privat.izin('warga') = 2
    when k = 'iuran'      then privat.izin('iuran') = 2
    when k = 'keluhan'    then privat.izin('keluhan') = 2
    when k = 'pengumuman' then privat.izin('info') = 2
    when k = 'surat'      then privat.izin('surat') = 2
    when k = 'pengaturan' then privat.izin('pengaturan') = 2
    when k in ('tamu', 'paket', 'titip', 'kejadian', 'jaga', 'darurat', 'nomorDarurat') then privat.izin('keamanan') = 2
    else false end;  -- pengurus, peran, akunWarga: hanya pemilik
end $$;
create or replace function privat.jaga_dokumen() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is not null then new.data := new.data || jsonb_build_object('oleh', auth.uid()::text); end if;
  if privat.peran_saya() = 'warga' then
    if tg_op = 'UPDATE' and new.koleksi = 'warga' then
      new.data := new.data || jsonb_build_object('blok', old.data->'blok', 'status', old.data->'status',
        'statusHuni', old.data->'statusHuni', 'mulaiIuran', old.data->'mulaiIuran');
    end if;
    if tg_op = 'INSERT' and new.koleksi = 'keluhan' then new.data := (new.data - 'tanggapan') || jsonb_build_object('status', 'Baru'); end if;
    if tg_op = 'UPDATE' and new.koleksi in ('darurat', 'titip') then new.data := new.data || jsonb_build_object('wargaId', old.data->'wargaId'); end if;
  end if;
  new.diperbarui := now();
  return new;
end $$;
create table if not exists public.log_aktivitas (
  id bigint generated always as identity primary key, waktu timestamptz not null default now(),
  user_id uuid, nama text, aksi text not null, koleksi text, dok_id text, data_lama jsonb);
alter table public.log_aktivitas enable row level security;
create or replace function privat.catat_log() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.log_aktivitas (user_id, nama, aksi, koleksi, dok_id, data_lama)
  values (auth.uid(), (select nama from public.profil where user_id = auth.uid()), lower(tg_op),
    coalesce(new.koleksi, old.koleksi), coalesce(new.id, old.id), case when tg_op = 'DELETE' then old.data end);
  return null;
end $$;
revoke all on all functions in schema privat from public, anon;
grant execute on function privat.peran_saya(), privat.warga_saya(), privat.pengurus_saya(), privat.izin(text),
  privat.boleh_baca(text, jsonb), privat.boleh_tulis(text, jsonb) to authenticated;
revoke all on function privat.jaga_dokumen(), privat.catat_log() from authenticated;

-- Aturan akses (untuk instalasi baru: hapus policy lama dari schema.sql lalu buat ini)
drop policy if exists "pengurus akses penuh" on public.dokumen;
drop policy if exists "warga baca" on public.dokumen;
drop policy if exists "warga tambah" on public.dokumen;
drop policy if exists "warga ubah" on public.dokumen;
drop policy if exists "tulis sesuai role" on public.dokumen;
drop policy if exists "baca sesuai role" on public.dokumen;
create policy "tulis sesuai role" on public.dokumen for all to authenticated
  using (privat.boleh_tulis(koleksi, data)) with check (privat.boleh_tulis(koleksi, data));
create policy "baca sesuai role" on public.dokumen for select to authenticated using (
  privat.boleh_baca(koleksi, data)
  or (privat.peran_saya() = 'warga' and (koleksi in ('pengumuman', 'nomorDarurat', 'pengaturan')
    or (koleksi = 'warga' and id = privat.warga_saya())
    or (koleksi in ('iuran', 'keluhan', 'paket', 'titip', 'tamu', 'darurat') and data->>'wargaId' = privat.warga_saya()))));
create policy "warga tambah" on public.dokumen for insert to authenticated with check (
  privat.peran_saya() = 'warga' and koleksi in ('keluhan', 'darurat', 'titip') and data->>'wargaId' = privat.warga_saya());
create policy "warga ubah" on public.dokumen for update to authenticated
  using (privat.peran_saya() = 'warga' and ((koleksi = 'warga' and id = privat.warga_saya())
    or (koleksi in ('darurat', 'titip') and data->>'wargaId' = privat.warga_saya())))
  with check (privat.peran_saya() = 'warga' and ((koleksi = 'warga' and id = privat.warga_saya())
    or (koleksi in ('darurat', 'titip') and data->>'wargaId' = privat.warga_saya())));
drop policy if exists "baca profil" on public.profil;
drop policy if exists "pemilik kelola profil" on public.profil;
create policy "baca profil" on public.profil for select to authenticated using (user_id = auth.uid() or privat.peran_saya() = 'pemilik');
create policy "pemilik kelola profil" on public.profil for all to authenticated
  using (privat.peran_saya() = 'pemilik') with check (privat.peran_saya() = 'pemilik');
drop policy if exists "pemilik baca log" on public.log_aktivitas;
create policy "pemilik baca log" on public.log_aktivitas for select to authenticated using (privat.peran_saya() = 'pemilik');

alter table public.dokumen drop constraint if exists dokumen_ukuran;
alter table public.dokumen add constraint dokumen_ukuran check (pg_column_size(data) < 262144);
create or replace trigger trg_jaga_dokumen before insert or update on public.dokumen for each row execute function privat.jaga_dokumen();
create or replace trigger trg_log_dokumen after insert or update or delete on public.dokumen for each row execute function privat.catat_log();

-- Fungsi admin (dipanggil dari menu Admin; semuanya memeriksa peran di server)
create or replace function public.admin_buat_user(email_baru text, pw text) returns uuid language plpgsql security definer set search_path = public as $$
declare e text := lower(trim(email_baru)); uid uuid := gen_random_uuid();
begin
  if privat.peran_saya() is distinct from 'pemilik' then raise exception 'Tidak diizinkan'; end if;
  if e !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'Format email tidak valid'; end if;
  if pw is null or length(pw) < 8 then raise exception 'Password minimal 8 karakter'; end if;
  if exists (select 1 from auth.users where lower(email) = e) then raise exception 'Email sudah dipakai akun lain'; end if;
  insert into auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
  values ('00000000-0000-0000-0000-000000000000', uid, 'authenticated', 'authenticated', e,
    extensions.crypt(pw, extensions.gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', '');
  insert into auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  values (gen_random_uuid(), uid, uid::text, jsonb_build_object('sub', uid::text, 'email', e, 'email_verified', true), 'email', null, now(), now());
  return uid;
end $$;
create or replace function public.admin_reset_password(target uuid, pw text) returns void language plpgsql security definer set search_path = public as $$
declare tp text;
begin
  if pw is null or length(pw) < 8 then raise exception 'Password minimal 8 karakter'; end if;
  select peran into tp from public.profil where user_id = target;
  if privat.peran_saya() = 'pemilik' or (privat.peran_saya() = 'pengurus' and tp = 'warga' and privat.izin('warga') = 2) then
    update auth.users set encrypted_password = extensions.crypt(pw, extensions.gen_salt('bf')), updated_at = now() where id = target;
    if not found then raise exception 'User tidak ditemukan'; end if;
  else raise exception 'Tidak diizinkan'; end if;
end $$;
create or replace function public.admin_konfirmasi_user(target uuid) returns void language plpgsql security definer set search_path = public as $$
begin
  if privat.peran_saya() is distinct from 'pemilik' then raise exception 'Tidak diizinkan'; end if;
  update auth.users set email_confirmed_at = coalesce(email_confirmed_at, now()) where id = target;
end $$;
create or replace function public.admin_ubah_email(target uuid, email_baru text) returns void language plpgsql security definer set search_path = public as $$
declare e text := lower(trim(email_baru));
begin
  if privat.peran_saya() is distinct from 'pemilik' then raise exception 'Tidak diizinkan'; end if;
  if e !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'Format email tidak valid'; end if;
  if exists (select 1 from auth.users where lower(email) = e and id <> target) then raise exception 'Email sudah dipakai akun lain'; end if;
  update auth.users set email = e, email_confirmed_at = coalesce(email_confirmed_at, now()), email_change = '', email_change_token_new = '', updated_at = now() where id = target;
  if not found then raise exception 'User tidak ditemukan'; end if;
  update auth.identities set identity_data = identity_data || jsonb_build_object('email', e), updated_at = now() where user_id = target and provider = 'email';
end $$;
revoke all on function public.admin_buat_user(text, text), public.admin_reset_password(uuid, text),
  public.admin_konfirmasi_user(uuid), public.admin_ubah_email(uuid, text) from public, anon;
grant execute on function public.admin_buat_user(text, text), public.admin_reset_password(uuid, text),
  public.admin_konfirmasi_user(uuid), public.admin_ubah_email(uuid, text) to authenticated;

-- Ganti password sendiri (password lama dicek di server, maks 5 salah / 15 menit) & wajib ganti setelah reset
alter table public.profil add column if not exists wajib_ganti boolean not null default false;
create table if not exists privat.percobaan_password (user_id uuid not null, waktu timestamptz not null default now(), berhasil boolean not null default false);
create index if not exists percobaan_password_idx on privat.percobaan_password (user_id, waktu);
revoke all on privat.percobaan_password from public, anon, authenticated;
create or replace function public.ganti_password_saya(lama text, baru text) returns text
language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); h text; sejak timestamptz;
begin
  if uid is null then return 'belum_login'; end if;
  select greatest(now() - interval '15 minutes', coalesce(max(waktu) filter (where berhasil), '-infinity')) into sejak
    from privat.percobaan_password where user_id = uid;
  if (select count(*) from privat.percobaan_password where user_id = uid and not berhasil and waktu > sejak) >= 5 then return 'kunci'; end if;
  select encrypted_password into h from auth.users where id = uid;
  if h is null or lama is null or extensions.crypt(lama, h) <> h then
    insert into privat.percobaan_password (user_id) values (uid);
    return 'salah';
  end if;
  if baru is null or length(baru) < 8 then return 'pendek'; end if;
  if baru = lama then return 'sama'; end if;
  update auth.users set encrypted_password = extensions.crypt(baru, extensions.gen_salt('bf')), updated_at = now() where id = uid;
  update public.profil set wajib_ganti = false where user_id = uid;
  insert into privat.percobaan_password (user_id, berhasil) values (uid, true);
  insert into public.log_aktivitas (user_id, nama, aksi, koleksi) values (uid, (select nama from public.profil where user_id = uid), 'ganti_password', 'akun');
  return 'ok';
end $$;
revoke all on function public.ganti_password_saya(text, text) from public, anon;
grant execute on function public.ganti_password_saya(text, text) to authenticated;

create or replace function public.admin_reset_password(target uuid, pw text) returns void
language plpgsql security definer set search_path = public as $$
declare tp text;
begin
  if pw is null or length(pw) < 8 then raise exception 'Password minimal 8 karakter'; end if;
  select peran into tp from public.profil where user_id = target;
  if privat.peran_saya() = 'pemilik' or (privat.peran_saya() = 'pengurus' and tp = 'warga' and privat.izin('warga') = 2) then
    update auth.users set encrypted_password = extensions.crypt(pw, extensions.gen_salt('bf')), updated_at = now() where id = target;
    if not found then raise exception 'User tidak ditemukan'; end if;
    update public.profil set wajib_ganti = true where user_id = target;
    update auth.refresh_tokens set revoked = true where user_id = target::text and not revoked;
    insert into public.log_aktivitas (user_id, nama, aksi, koleksi, dok_id)
      values (auth.uid(), (select nama from public.profil where user_id = auth.uid()), 'reset_password', 'akun', (select nama from public.profil where user_id = target));
  else raise exception 'Tidak diizinkan'; end if;
end $$;

-- Login dengan No. HP: akun memakai alamat internal <62xxxxxxxxxx>@hp.kasuari.app
create or replace function privat.normal_hp(t text) returns text language sql immutable as $$
  select case when d = '' then '' when d like '0%' then '62' || substr(d, 2) when d like '8%' then '62' || d else d end
  from (select regexp_replace(coalesce(t, ''), '\D', '', 'g') d) x $$;
create or replace function privat.hp_email(t text) returns text language sql immutable as $$ select privat.normal_hp(t) || '@hp.kasuari.app' $$;
grant execute on function privat.normal_hp(text), privat.hp_email(text) to authenticated;
-- No. HP di data warga/pengurus berubah -> akun login tertaut ikut berubah; No. HP ganda ditolak
create or replace function privat.sinkron_login_hp() returns trigger language plpgsql security definer set search_path = public as $$
declare uid uuid; hp text; e text;
begin
  if new.koleksi not in ('warga', 'pengurus') then return null; end if;
  if privat.normal_hp(old.data->>'noHp') = privat.normal_hp(new.data->>'noHp') then return null; end if;
  if new.koleksi = 'warga' then select user_id into uid from public.profil where peran = 'warga' and warga_id = new.id limit 1;
  else select user_id into uid from public.profil where peran = 'pengurus' and pengurus_id = new.id limit 1; end if;
  if uid is null then return null; end if;
  hp := privat.normal_hp(new.data->>'noHp');
  if length(hp) < 10 then raise exception 'No HP wajib diisi (minimal 10 digit) karena dipakai untuk login.'; end if;
  e := hp || '@hp.kasuari.app';
  if exists (select 1 from auth.users where lower(email) = e and id <> uid) then raise exception 'No HP % sudah dipakai akun login lain.', new.data->>'noHp'; end if;
  update auth.users set email = e, updated_at = now() where id = uid;
  update auth.identities set identity_data = identity_data || jsonb_build_object('email', e), updated_at = now() where user_id = uid and provider = 'email';
  return null;
end $$;
revoke all on function privat.sinkron_login_hp() from public, anon, authenticated;
create or replace trigger trg_sinkron_login_hp after update on public.dokumen for each row execute function privat.sinkron_login_hp();
