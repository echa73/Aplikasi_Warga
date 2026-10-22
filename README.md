# Warga Kasuari

Aplikasi data warga, iuran, kas, keluhan, pengumuman, surat, dan keamanan untuk Vila Nusa Indah 5 – Kluster Kasuari.
Satu file `index.html` (tanpa build), data di Supabase, hosting di Cloudflare Pages.

## Struktur
- `index.html`: seluruh aplikasi (HTML + CSS + JS), memuat supabase-js dari jsDelivr.
- `supabase/schema.sql`: tabel `dokumen` & `profil`, aturan akses (RLS), trigger, realtime.

## Setup
1. Supabase → SQL Editor → jalankan `supabase/schema.sql`.
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
