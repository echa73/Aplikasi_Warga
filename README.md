# Warga Kasuari

Aplikasi data warga, iuran, kas, keluhan, pengumuman, surat, dan keamanan untuk Vila Nusa Indah 5 – Kluster Kasuari.
Satu file `index.html` (tanpa build), data di Supabase, hosting di Cloudflare Pages.

## Struktur
- `index.html`: seluruh aplikasi (HTML + CSS + JS), memuat supabase-js dari jsDelivr.
- `_headers`: header keamanan HTTP untuk Cloudflare.
- `supabase/schema.sql`: tabel `dokumen` & `profil`, realtime, fungsi reset/ubah akun.
- `supabase/keamanan.sql`: hak akses per role di server, skema `privat`, log aktivitas (jalankan setelah schema.sql).

## Setup
1. Supabase → SQL Editor → jalankan `supabase/schema.sql`, lalu `supabase/keamanan.sql`.
2. Authentication → Providers → Email → matikan **Confirm email**.
3. Buat user pemilik di Authentication → Users, lalu:
   ```sql
   insert into public.profil (user_id, nama, peran)
   select id, 'Nama Pemilik', 'pemilik' from auth.users where email = 'email@contoh.com';
   ```
4. Ganti `SUPA_URL` dan `SUPA_KEY` (publishable key) di `index.html` bila memakai project lain.
5. Cloudflare → Workers & Pages → Create → Pages → upload folder ini (atau hubungkan repo ini, tanpa build command, output directory `/`).

## Login
- Pemilik & pengurus: email + password (dibuat di menu Admin).
- Warga: username + password (tercatat sebagai `username@warga.kasuari.app`).
- Reset password: Supabase → Authentication → Users.

> Jangan commit secret/service_role key atau file berisi data warga asli.

## Keamanan
- Hak akses per menu (tabel Role di Admin) ditegakkan oleh Row Level Security di server, bukan hanya di tampilan.
- Data pengurus, role, dan akun hanya bisa diubah Pemilik; akun dibuat lewat fungsi server (`admin_buat_user`).
- Warga hanya bisa membaca/mengubah data rumahnya sendiri; nomor rumah, status, dan tanggal iuran dikunci server.
- Kolom `oleh` diisi server; setiap tambah/ubah/hapus tercatat di `log_aktivitas` (dibaca Pemilik di Admin → Log aktivitas).
- Password minimal 8 karakter, logout otomatis setelah 30 menit tidak aktif, Content-Security-Policy & header keamanan.
- Pengaturan dashboard Supabase yang disarankan: matikan *Allow new users to sign up* dan *Confirm email*, minimal password 8.
