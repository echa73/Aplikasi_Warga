# Warga Kasuari

Aplikasi data warga, iuran, kas, keluhan, pengumuman, surat, dan keamanan untuk Vila Nusa Indah 5 – Kluster Kasuari.
Satu file `index.html` (tanpa build), data di Supabase, hosting di Cloudflare Pages.

## Struktur
- `public/index.html`: seluruh aplikasi (HTML + CSS + JS), memuat supabase-js dari jsDelivr.
- `public/_headers`: header keamanan HTTP untuk Cloudflare.
- `public/manifest.webmanifest`, `public/sw.js`, `public/icons/`: PWA (bisa dipasang di HP, tetap terbuka saat offline).
- `wrangler.jsonc`: konfigurasi Cloudflare Worker (menyajikan folder `public/`).
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
4. Ganti `SUPA_URL` dan `SUPA_KEY` (publishable key) di `public/index.html` bila memakai project lain.
5. Deploy ke Cloudflare Worker: Workers & Pages → Worker `aplikasi-warga` → Settings → Build → Connect repository ini.
   Build command kosong, deploy command `npx wrangler deploy`. Setiap push ke `main` otomatis ter-deploy.
   Alternatif manual: upload isi folder `public/` (index.html + _headers).

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

## Aplikasi di HP (PWA)
- Android (Chrome): buka alamat aplikasi, tombol **Pasang** muncul di bawah layar, atau menu ⋮ → *Instal aplikasi*.
- iPhone (Safari): tombol Bagikan → *Tambah ke Layar Utama*.
- Setiap deploy baru otomatis terdeteksi; aplikasi menawarkan *Muat ulang* untuk memakai versi terbaru.
