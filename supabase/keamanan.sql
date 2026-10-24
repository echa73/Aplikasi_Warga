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

-- Saldo awal (cut-off) disimpan di koleksi 'keuangan' (dokumen saldoAwal): baca = bisa lihat kas/laporan, ubah = kelola kas (Bendahara).
-- Lihat definisi privat.boleh_baca / privat.boleh_tulis terbaru di project (migrasi saldo_cutoff_keuangan).

-- Pengajuan dana (koleksi 'pengajuan'): semua pengurus aktif bisa melihat & mengajukan; pemohon hanya bisa ubah/batalkan
-- pengajuannya sendiri selama 'Menunggu'; pencairan/penolakan hanya oleh role dengan izin ubah pengeluaran (Bendahara).
-- Trigger privat.jaga_dokumen mengisi pemohonId/pemohonNama dari akun yang login. Definisi lengkap: migrasi pengajuan_pengeluaran.

-- Papan info publik di halaman login: public.info_publik() (security definer, boleh dipanggil anon).
-- Hanya mengembalikan pengumuman terbaru (judul, isi ringkas, jadwal) dan keluhan yang belum selesai (judul, kategori, status, tanggal),
-- tanpa nama pelapor, rumah, lokasi, atau isi keluhan. Bisa dimatikan di Pengaturan (pengaturan.umum.papanPublik = false).

-- 2026-10-23: info_publik() tidak lagi menampilkan pengumuman yang tanggal acaranya sudah lewat
-- (filter tambahan: not (tanggalAcara <> '' and tanggalAcara < hari ini WIB)), termasuk yang disematkan.

-- 2026-10-23: Modul Sumbangan (migrasi sumbangan_akses + sumbangan_saya_target_otomatis)
-- Koleksi baru: sumbangan (program), donasi (penerimaan), salur (penyaluran).
-- privat.izin: area 'sumbangan' fallback ke izin 'kas' bila role belum punya kunci 'sumbangan'.
-- boleh_baca: sumbangan/donasi/salur terbaca oleh izin sumbangan/kas/pengeluaran/laporan/ringkasan >= lihat.
-- boleh_tulis: sumbangan/donasi/salur hanya izin 'sumbangan' = kelola (pemilik selalu boleh).
-- Warga: boleh membaca & menambah 'donasi' miliknya sendiri; trigger jaga_dokumen memaksa status 'Menunggu',
--   sumber 'warga', nama/blok dari data warga, membuang 'verif', dan menolak bila program tidak aktif/tidak menerima konfirmasi.
-- public.sumbangan_saya(): RPC (authenticated) — program yang ditampilkan ke warga + total, penyaluran,
--   daftar penyumbang sesuai pengaturan (anonim -> "Hamba Allah"), dan donasi milik warga tersebut.

-- 2026-10-23: Modul Kerohanian (migrasi kerohanian_akses + qurban_baca_ketat)
-- Koleksi: rohani (agenda, kabar duka, pengaturan lokasi 'set', pengaturan qurban 'qurban-<tahun>'), qurban (peserta).
-- privat.izin: area 'rohani' fallback ke izin 'info' bila role belum punya kunci 'rohani'.
-- rohani: terbaca semua pengurus & warga; ditulis izin rohani = kelola.
-- qurban: terbaca izin rohani = kelola atau kas >= lihat, warga hanya miliknya; ditulis izin rohani = kelola.
-- Role koord_kerohanian: izin rohani = kelola.

-- 2026-10-23: info_publik() menyembunyikan pengumuman kategori 'Berita duka' yang dibuat lebih dari 7 hari lalu.

-- 2026-10-23: public.saldo_kas() (authenticated, pemilik/pengurus saja) -> {saldo, menunggu}.
-- Rumus sama dengan buku kas: saldo cut-off + iuran + kas masuk - kas keluar + sumbangan diterima - penyaluran (program masuk kas),
-- semua sejak tanggal cut-off. Dipakai untuk peringatan "dana tidak mencukupi" di Pengajuan dana.

-- 2026-10-23: Lapak Warga (migrasi lapak_storage + lapak_akses)
-- Storage bucket publik 'lapak' (maks 1 MB, jpeg/webp/png). Unggah/ubah/hapus hanya di folder <auth.uid()>/ (pemilik boleh hapus semua).
-- Koleksi 'lapak': terbaca semua pengguna login kecuali status 'Disembunyikan' (kecuali penjualnya / moderator).
-- Tulis: penjual sendiri (penjualId = auth.uid()) atau moderator (izin 'lapak' = kelola, fallback izin 'info').
-- Warga: policy tambah/ubah/hapus lapak miliknya ("warga hapus lapak").
-- Trigger privat.jaga_lapak: penjualId & data penjual (nama, blok, HP) selalu diisi server; non-moderator tidak bisa
--   menyembunyikan/menampilkan kembali lapak yang disembunyikan moderator.

-- 2026-10-23: Izin berjualan Lapak Warga (migrasi lapak_izin_warga)
-- warga.data.izinLapak hanya bisa diubah Pemilik atau pengurus ber-role 'ketua' (privat.boleh_izin_lapak, trigger trg_jaga_warga_lapak).
-- Warga boleh mengajukan lewat warga.data.mintaLapak (status dipaksa 'Menunggu').
-- privat.jaga_lapak: warga tanpa izinLapak tidak bisa memasang lapak baru.
-- 2026-10-23 (lapak_hanya_warga): hanya akun warga yang boleh berjualan; pengurus, Ketua RT, dan pemilik ditolak.

-- 2026-10-23: Push notification SOS (migrasi push_notifikasi + push_daftar_lepas)
-- Ekstensi pg_net. Kunci VAPID & kunci pemicu disimpan di Supabase Vault: push_vapid_public, push_vapid_private, push_kunci
--   (dibuat langsung lewat SQL, tidak disimpan di migrasi/kode).
-- Tabel public.push_langganan (endpoint, user_id, p256dh, auth, perangkat); RLS milik sendiri.
-- RPC: push_daftar / push_lepas (authenticated), push_kunci_publik (authenticated),
--      push_rahasia & push_penerima (hanya service_role, dipakai edge function).
-- Trigger privat.push_darurat: SOS baru -> notifikasi ke pemilik & pengurus ber-izin keamanan;
--      SOS 'Ditangani' -> notifikasi ke warga pelapor. Memanggil edge function kirim-push via pg_net + header x-kunci.
-- Edge function: supabase/functions/kirim-push (verify_jwt = false, autentikasi sendiri).

-- 2026-10-24: Pengerasan keamanan (migrasi pengerasan_keamanan_2026_10_24 + lapak_batas_foto)
-- * anon tidak punya hak apa pun atas tabel (hanya RPC info_publik untuk papan info login).
-- * authenticated: tanpa TRUNCATE/REFERENCES/TRIGGER; log_aktivitas hanya SELECT (RLS: pemilik).
-- * privat.normal_hp & privat.hp_email: search_path tetap.
-- * CHECK dokumen_ukuran_maks: data jsonb maks 256 KB per dokumen.
-- * privat.batas_laju (akun warga): SOS 3/10 menit, keluhan/titip/donasi 10/jam, lapak 15/hari.
-- * privat.validasi_lapak: judul 1–80, deskripsi ≤1500, harga numerik, maks 5 foto & foto wajib dari folder
--   storage 'lapak/<uid>/' milik penjual.
-- * Storage 'lapak': unggah hanya warga ber-izinLapak, maks 60 foto per akun (privat.jumlah_foto_lapak).
-- * Edge function kirim-push: tes notifikasi dibatasi 1x/30 detik per akun.
-- Aplikasi: CSP script-src dipersempit ke path supabase-js 2.45.4; header CORP & X-Permitted-Cross-Domain-Policies;
--   ekspor CSV kebal formula injection (=,+,-,@ diawali apostrof).
-- Disarankan di dashboard Supabase: Authentication → matikan "Allow new users to sign up";
--   aktifkan "Leaked password protection" (paket Pro); pertimbangkan MFA untuk akun Pemilik.

-- 2026-10-24: Verifikasi dua langkah (TOTP) untuk Pemilik (migrasi mfa_pemilik)
-- privat.peran_saya(): bila Pemilik punya faktor MFA berstatus 'verified' tetapi JWT belum 'aal2',
--   peran dianggap NULL (tidak ada akses Pemilik sama sekali: data, fungsi admin, storage).
-- Pemulihan bila HP authenticator hilang: hapus faktor lewat Supabase Dashboard → Authentication → Users →
--   pilih akun Pemilik → hapus MFA factor (atau minta pengelola teknis).

-- 2026-10-24: Pekerja & gaji (migrasi gaji_pekerja_akses)
-- Koleksi 'pekerja' (data satpam/kebersihan, NIK, rekening) dan 'gaji' (slip per bulan).
-- privat.izin: area 'gaji' fallback ke izin 'kas'. Role bendahara: gaji = kelola.
-- Baca: izin gaji >= lihat; pekerja yang punya akun (akunId = auth.uid()) hanya melihat data dirinya & slip berstatus 'Dibayar'.
-- Tulis: izin gaji = kelola. Pembayaran slip membuat dokumen kas 'gaji-<idSlip>' (jenis keluar) agar masuk Buku kas & Laporan.

-- ===== Struktur organisasi (2026-10-24) =====
-- RPC public.struktur_organisasi(): untuk semua pengguna login (pemilik/pengurus/warga).
-- Hanya mengirim kolom aman: nama, jabatan, no HP pengurus (bisa dimatikan lewat pengaturan.strukturKontak=false),
-- serta nama+jabatan pekerja aktif (tanpa gaji/rekening/NIK). Data pengaturan: ketuaRw, rt, rw, periodeMulai, periodeSelesai.
-- EXECUTE dicabut dari public & anon; hanya authenticated.

-- ===== Foto pengurus (2026-10-24) =====
-- Bucket storage 'pengurus' (public, maks 512 KB, jpeg/webp/png). Unggah/ubah/hapus hanya Pemilik
-- (privat.peran_saya() = 'pemilik', jadi ikut wajib MFA bila aktif), nama file harus <id>/<acak>.jpg.
-- struktur_organisasi() kini juga mengirim 'foto', hanya bila URL berawalan storage publik proyek ini.
-- Diuji (rollback): warga DITOLAK, ketua DITOLAK, pemilik BOLEH, nama file aneh DITOLAK.

-- ===== Pekerja di struktur organisasi (2026-10-24) =====
-- dokumen pekerja: struktur = 'petugas' | 'pengurus' | 'tidak', atasan (jabatan pengurus), jabatanStruktur.
-- pengaturan.strukturPetugas=false menyembunyikan semua pekerja mode 'petugas'. RPC struktur_organisasi() memfilter di server
-- dan tetap hanya mengirim nama/jabatan pekerja (tanpa HP, gaji, rekening, NIK).
-- (2026-10-24) pekerja.struktur kini: 'keamanan' | 'kebersihan' | 'petugas' | 'pengurus' | 'tidak'. RPC mengirim nilai mentah (null bila belum diatur);
-- klien menentukan kategori & atasan otomatis dari jabatan bila belum diatur.

-- ===== Foto pekerja (2026-10-24) =====
-- Bucket 'pengurus', folder pk_<id>/: unggah/ubah/hapus untuk izin('gaji') >= 2 (bendahara/pemilik), nama wajib pk_<id>/<acak>.jpg.
-- struktur_organisasi() mengirim 'foto' pekerja hanya bila URL dari storage proyek ini.
-- Diuji (rollback): bendahara BOLEH di pk_*, DITOLAK di folder pengurus; ketua/satpam/warga DITOLAK.

-- ===== Jadwal jaga dari data pekerja (2026-10-24) =====
-- RPC public.petugas_keamanan(): untuk izin('keamanan') >= 1, mengembalikan id/nama/jabatan pekerja aktif kategori keamanan
-- (struktur='keamanan' atau jabatan satpam/komandan/keamanan/hansip/linmas). Tanpa gaji/rekening/NIK/HP.
-- Diuji (rollback): koord keamanan dapat daftar; bendahara (keamanan=tidak) & warga dapat [].

-- ===== Kebersihan lingkungan (2026-10-24) =====
-- Koleksi baru 'bersih' (set jadwal sampah, kg_* kegiatan, ck_<tanggal> cek harian).
-- izin area 'kebersihan' (fallback ke izin 'keluhan'); role koord_kebersihan diberi kebersihan=kelola.
-- boleh_baca: 'bersih' terbaca semua pengurus; warga juga boleh baca (policy "baca sesuai role" ditambah 'bersih').
--   keluhan juga terbaca bila izin kebersihan >= 1.
-- boleh_tulis: 'bersih' butuh izin kebersihan = 2; keluhan boleh diubah pemegang kebersihan=2 hanya untuk kategori 'Kebersihan & sampah'.
-- RPC public.petugas_kebersihan(): nama/jabatan pekerja kebersihan aktif untuk izin kebersihan >= 1.
-- Diuji (rollback): koord kebersihan & ketua BOLEH tulis; bendahara & warga DITOLAK tulis, tetap bisa baca.
