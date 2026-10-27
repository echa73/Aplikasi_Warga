-- ============================================================
-- Permohonan surat oleh warga (koleksi 'mintaSurat')
-- Jalankan setelah keamanan.sql.
--   Warga   : mengajukan untuk rumahnya sendiri, melihat permohonannya, membatalkan selama Menunggu,
--             dan melihat surat yang sudah dibuat untuk anggota rumahnya.
--   Pengurus: izin "surat" lihat → melihat permohonan; kelola → memproses (buat surat / tolak).
-- ============================================================

-- Baca: warga hanya permohonan rumahnya sendiri
drop policy if exists "warga lihat permohonan surat" on public.dokumen;
create policy "warga lihat permohonan surat" on public.dokumen
  for select to authenticated
  using (privat.sebagai_warga() and koleksi = 'mintaSurat' and data->>'wargaId' = privat.warga_saya());

-- Baca: warga melihat surat yang dibuat untuk anggota rumahnya
drop policy if exists "warga lihat surat sendiri" on public.dokumen;
create policy "warga lihat surat sendiri" on public.dokumen
  for select to authenticated
  using (privat.sebagai_warga() and koleksi = 'surat' and data->'pemohon'->>'wargaId' = privat.warga_saya());

-- Tambah: warga mengajukan untuk rumahnya sendiri
drop policy if exists "warga ajukan surat" on public.dokumen;
create policy "warga ajukan surat" on public.dokumen
  for insert to authenticated
  with check (privat.sebagai_warga() and koleksi = 'mintaSurat' and data->>'wargaId' = privat.warga_saya());

-- Ubah: warga hanya bisa membatalkan permohonannya yang masih Menunggu (isi lain dikunci trigger)
drop policy if exists "warga batal surat" on public.dokumen;
create policy "warga batal surat" on public.dokumen
  for update to authenticated
  using (privat.sebagai_warga() and koleksi = 'mintaSurat' and data->>'wargaId' = privat.warga_saya() and data->>'status' = 'Menunggu')
  with check (privat.sebagai_warga() and koleksi = 'mintaSurat' and data->>'wargaId' = privat.warga_saya());

-- Pengurus: lihat (izin surat >= lihat) dan kelola (izin surat = kelola)
drop policy if exists "pengurus lihat permohonan surat" on public.dokumen;
create policy "pengurus lihat permohonan surat" on public.dokumen
  for select to authenticated
  using (koleksi = 'mintaSurat' and (privat.peran_saya() = 'pemilik' or privat.izin('surat') >= 1));
drop policy if exists "pengurus kelola permohonan surat" on public.dokumen;
create policy "pengurus kelola permohonan surat" on public.dokumen
  for all to authenticated
  using (koleksi = 'mintaSurat' and (privat.peran_saya() = 'pemilik' or privat.izin('surat') = 2))
  with check (koleksi = 'mintaSurat' and (privat.peran_saya() = 'pemilik' or privat.izin('surat') = 2));

-- Penjaga isi: data warga dibentuk ulang di server, status tidak bisa dipalsukan, batas laju
create or replace function privat.jaga_minta_surat()
returns trigger language plpgsql security definer set search_path = public as $$
declare w jsonb; idx int; nama text; n int;
begin
  if auth.uid() is null or privat.peran_saya() = 'pemilik' or privat.izin('surat') = 2 then return new; end if;
  if tg_op = 'UPDATE' then
    -- warga: hanya Menunggu → Dibatalkan, isi lain tetap
    if coalesce(old.data->>'status', '') <> 'Menunggu' then raise exception 'Permohonan ini sudah diproses, tidak bisa diubah.'; end if;
    new.data := old.data || jsonb_build_object('status', 'Dibatalkan', 'dibatalkan', to_char(now() at time zone 'Asia/Jakarta', 'YYYY-MM-DD"T"HH24:MI'));
    return new;
  end if;
  select data into w from public.dokumen where koleksi = 'warga' and id = privat.warga_saya();
  if w is null then raise exception 'Data rumah Anda tidak ditemukan.'; end if;
  idx := case when coalesce(new.data->>'pemohonIdx', '-1') ~ '^-?[0-9]{1,3}$' then (new.data->>'pemohonIdx')::int else -2 end;
  nama := case when idx = -1 then w->>'nama' when idx >= 0 then w->'anggota'->idx->>'nama' end;
  if coalesce(nama, '') = '' then raise exception 'Pemohon tidak valid.'; end if;
  if length(coalesce(new.data->>'jenis', '')) not between 5 and 60 then raise exception 'Jenis surat tidak valid.'; end if;
  if length(btrim(coalesce(new.data->>'keperluan', ''))) not between 3 and 150 then raise exception 'Keperluan wajib diisi (3–150 karakter).'; end if;
  if length(coalesce(new.data->>'keterangan', '')) > 300 then raise exception 'Keterangan maksimal 300 karakter.'; end if;
  select count(*) into n from public.log_aktivitas
   where user_id = auth.uid() and koleksi = 'mintaSurat' and aksi = 'insert' and waktu > now() - interval '1 hour';
  if n >= 5 then raise exception 'Terlalu banyak permohonan surat dalam waktu singkat. Coba lagi nanti.' using errcode = 'P0001'; end if;
  new.data := jsonb_build_object(
    'wargaId', privat.warga_saya(), 'blok', w->>'blok', 'pemohonIdx', idx, 'pemohonNama', nama,
    'jenis', new.data->>'jenis', 'keperluan', btrim(new.data->>'keperluan'), 'keterangan', btrim(coalesce(new.data->>'keterangan', '')),
    'status', 'Menunggu', 'dikirim', to_char(now() at time zone 'Asia/Jakarta', 'YYYY-MM-DD"T"HH24:MI'),
    'oleh', auth.uid()::text, 'olehSesi', new.data->'olehSesi');
  return new;
end $$;

drop trigger if exists trg_jaga_minta_surat on public.dokumen;
create trigger trg_jaga_minta_surat before insert or update on public.dokumen
  for each row when (new.koleksi = 'mintaSurat') execute function privat.jaga_minta_surat();
