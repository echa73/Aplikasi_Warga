-- =====================================================================
-- Warga Kasuari · skema database Supabase
-- Jalankan sekali di Supabase: SQL Editor → New query → paste → Run
-- =====================================================================

-- 1. Tabel data aplikasi (semua data: warga, iuran, kas, keluhan, dll)
create table if not exists public.dokumen (
  koleksi    text        not null,
  id         text        not null,
  data       jsonb       not null default '{}'::jsonb,
  diperbarui timestamptz not null default now(),
  primary key (koleksi, id)
);
create index if not exists dokumen_warga_idx on public.dokumen ((data->>'wargaId'));

-- 2. Profil pengguna: siapa pemilik, pengurus, atau warga
create table if not exists public.profil (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  nama        text,
  peran       text not null default 'warga' check (peran in ('pemilik', 'pengurus', 'warga')),
  pengurus_id text,   -- id data pengurus di aplikasi (untuk role per menu)
  warga_id    text,   -- id rumah/KK untuk akun warga
  dibuat      timestamptz not null default now()
);

-- 3. Fungsi bantu (dipakai aturan akses)
create or replace function public.peran_saya() returns text
language sql stable security definer set search_path = public as $$
  select peran from public.profil where user_id = auth.uid()
$$;

create or replace function public.warga_saya() returns text
language sql stable security definer set search_path = public as $$
  select warga_id from public.profil where user_id = auth.uid()
$$;

-- 4. Aturan akses (Row Level Security)
alter table public.dokumen enable row level security;
alter table public.profil  enable row level security;

-- Pemilik & pengurus: baca dan ubah semua data
drop policy if exists "pengurus akses penuh" on public.dokumen;
create policy "pengurus akses penuh" on public.dokumen
  for all to authenticated
  using      (public.peran_saya() in ('pemilik', 'pengurus'))
  with check (public.peran_saya() in ('pemilik', 'pengurus'));

-- Warga: hanya membaca data umum dan data rumahnya sendiri
drop policy if exists "warga baca" on public.dokumen;
create policy "warga baca" on public.dokumen
  for select to authenticated
  using (
    public.peran_saya() = 'warga' and (
         koleksi in ('pengumuman', 'nomorDarurat', 'pengaturan')
      or (koleksi = 'warga' and id = public.warga_saya())
      or (koleksi in ('iuran', 'keluhan', 'paket', 'titip', 'tamu', 'darurat')
          and data->>'wargaId' = public.warga_saya())
    )
  );

-- Warga: boleh membuat keluhan, panggilan darurat, dan titip rumah miliknya
drop policy if exists "warga tambah" on public.dokumen;
create policy "warga tambah" on public.dokumen
  for insert to authenticated
  with check (
    public.peran_saya() = 'warga'
    and koleksi in ('keluhan', 'darurat', 'titip')
    and data->>'wargaId' = public.warga_saya()
  );

-- Warga: boleh mengubah data rumahnya sendiri, panggilan darurat & titip rumah miliknya
drop policy if exists "warga ubah" on public.dokumen;
create policy "warga ubah" on public.dokumen
  for update to authenticated
  using (
    public.peran_saya() = 'warga' and (
         (koleksi = 'warga' and id = public.warga_saya())
      or (koleksi in ('darurat', 'titip') and data->>'wargaId' = public.warga_saya())
    )
  )
  with check (
    public.peran_saya() = 'warga' and (
         (koleksi = 'warga' and id = public.warga_saya())
      or (koleksi in ('darurat', 'titip') and data->>'wargaId' = public.warga_saya())
    )
  );

-- Warga tidak bisa mengubah nomor rumah, status, status huni & tanggal wajib iuran
create or replace function public.jaga_dokumen() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.peran_saya() = 'warga' and new.koleksi = 'warga' then
    new.data := new.data || jsonb_build_object(
      'blok',       old.data->'blok',
      'status',     old.data->'status',
      'statusHuni', old.data->'statusHuni',
      'mulaiIuran', old.data->'mulaiIuran');
  end if;
  new.diperbarui := now();
  return new;
end $$;

drop trigger if exists trg_jaga_dokumen on public.dokumen;
create trigger trg_jaga_dokumen before update on public.dokumen
  for each row execute function public.jaga_dokumen();

-- Profil: tiap orang melihat profilnya; pemilik mengelola semua profil
drop policy if exists "baca profil" on public.profil;
create policy "baca profil" on public.profil
  for select to authenticated
  using (user_id = auth.uid() or public.peran_saya() in ('pemilik', 'pengurus'));

drop policy if exists "pemilik kelola profil" on public.profil;
create policy "pemilik kelola profil" on public.profil
  for all to authenticated
  using      (public.peran_saya() = 'pemilik')
  with check (public.peran_saya() = 'pemilik');

-- 5. Update langsung (realtime) supaya layar semua pengurus ikut berubah
do $$ begin
  alter publication supabase_realtime add table public.dokumen;
exception when duplicate_object then null; end $$;

-- 6. Reset password oleh Pemilik (semua akun) / pengurus (akun warga), dipanggil dari menu Admin
create or replace function public.admin_reset_password(target uuid, pw text) returns void
language plpgsql security definer set search_path = public, extensions as $$
declare tp text;
begin
  if pw is null or length(pw) < 6 then raise exception 'Password minimal 6 karakter'; end if;
  select peran into tp from public.profil where user_id = target;
  if public.peran_saya() = 'pemilik' or (public.peran_saya() = 'pengurus' and tp = 'warga') then
    update auth.users set encrypted_password = extensions.crypt(pw, extensions.gen_salt('bf')), updated_at = now() where id = target;
    if not found then raise exception 'User tidak ditemukan'; end if;
  else
    raise exception 'Tidak diizinkan';
  end if;
end $$;
revoke all on function public.admin_reset_password(uuid, text) from public, anon;
grant execute on function public.admin_reset_password(uuid, text) to authenticated;
