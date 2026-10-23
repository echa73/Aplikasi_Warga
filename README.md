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
- Semua akun (Pemilik, pengurus, warga) masuk dengan **No. HP + password**. Di Supabase tercatat sebagai `62xxxxxxxxxx@hp.kasuari.app`.
- Login pengurus memakai No. HP di data pengurus; login warga memakai No. HP kepala keluarga di Data warga. No. HP wajib diisi.
- Bila No. HP diubah, akun login ikut berubah otomatis (trigger `privat.sinkron_login_hp`); satu No. HP hanya untuk satu akun.
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

## Impor data warga dari Excel
Menu **Data warga → Impor Excel**. Unduh template (`public/template/Template-Impor-Warga.xlsx`), isi sheet "Data Warga" dan "Anggota Keluarga" mengikuti sheet "Panduan", lalu pilih file. Aplikasi menampilkan pratinjau dan validasi sebelum data disimpan. Data diolah di browser; file tidak diunggah ke server lain.

## Sumbangan
Menu **Keuangan → Sumbangan** (role dengan izin Sumbangan = kelola, default Bendahara): program sukarela / per rumah (THR keamanan & kebersihan, HUT RI, duka cita, dll.), catat sumbangan, catat keliling per rumah, penyaluran dana, verifikasi konfirmasi dari warga, laporan Excel & WhatsApp. Penerimaan (per program per tanggal) dan penyaluran otomatis masuk Buku kas, Pengeluaran, dan Laporan keuangan kecuali program ditandai "dana terpisah". Warga melihat progres dan bisa mengirim konfirmasi sumbangan.

## Kerohanian
Menu **Warga → Kerohanian**: jadwal sholat harian (metode Kemenag, lokasi bisa diatur) + tanggal Hijriah, agenda kegiatan keagamaan semua agama (bisa berulang mingguan/bulanan/"Jumat pertama"), kabar duka (bagikan ke WA, umumkan, buat program santunan), dan qurban (harga per tahun, peserta, kelompok sapi 1/7 otomatis, status bayar, Excel). Dikelola role dengan izin Kerohanian = kelola (default Koordinator Kerohanian; role lama mengikuti izin Pengumuman).

## Lapak Warga
Menu **Lingkungan → Lapak Warga**: marketplace antar warga. Warga yang sudah diizinkan Ketua RT/admin memasang produk/jasa (pengurus & admin tidak berjualan) (maks. 5 foto, otomatis diperkecil dan disimpan di Supabase Storage bucket `lapak`), harga pas/nego/mulai dari/gratis, kategori, pencarian, urutan harga, favorit, tandai terjual/stok habis, masa tayang 60 hari + perpanjang. Pembeli menghubungi penjual lewat WhatsApp (nomor dari data warga/pengurus, diisi server). Moderator (izin Lapak Warga = "Jual-beli + moderasi") bisa menyembunyikan lapak dengan alasan.

## Notifikasi HP (Web Push)
Menu **Keamanan → Pos jaga** (satpam/pengurus) dan **Aman** (warga): tombol "Aktifkan notifikasi" + "Kirim tes". SOS baru membuat HP satpam & pengurus berbunyi walau aplikasi ditutup; warga pelapor mendapat kabar saat SOS ditangani. iPhone: iOS 16.4+ dan aplikasi harus ditambahkan ke Layar Utama. Server: tabel `push_langganan`, trigger `push_darurat` (pg_net) → edge function `supabase/functions/kirim-push`.
