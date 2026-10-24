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

## Verifikasi dua langkah Pemilik
Menu **Admin** (Pemilik): "Aktifkan verifikasi dua langkah" → pindai QR dengan Google/Microsoft Authenticator → masukkan kode. Setelah aktif, login Pemilik meminta kode 6 digit; server menolak semua hak Pemilik sebelum kode diverifikasi (JWT AAL2). Bisa menambah HP cadangan. Bila HP hilang: hapus faktor MFA di Supabase Dashboard → Authentication → Users.

## Pekerja & gaji
Menu **Keuangan → Pekerja & gaji** (default Bendahara): data pekerja (satpam, petugas kebersihan, dll; gaji pokok, tunjangan tetap, rekening, akun login opsional), penggajian bulanan (buat slip draf dari data pekerja, tambah lembur/THR/bonus/kasbon/potongan, bayar satuan atau semua sekaligus), slip gaji PDF, kirim ringkasan slip via WhatsApp, rekap bulanan & tahunan (Excel). Gaji yang dibayar otomatis tercatat di Buku kas sesuai jabatan. Pekerja yang punya akun (mis. satpam) bisa melihat slip gajinya sendiri.

### Struktur organisasi
Menu **Struktur organisasi** (grup Utama) bisa dilihat semua pengguna, termasuk warga. Bagan disusun otomatis dari jabatan di Admin → Pengurus (Ketua → Wakil → Sekretaris & Bendahara → Koordinator & seksi) ditambah petugas aktif dari menu Pekerja. Ketua RW tampil sebagai pelindung (Pengaturan → Kop surat). Ada tombol WhatsApp per pengurus, bagikan ke WA, dan unduh PDF. Pengguna dengan izin Pengaturan bisa mengatur periode kepengurusan dan menyembunyikan nomor WA pengurus dari warga.
Foto pengurus diunggah di Admin → Pengurus → ubah data (dipotong persegi & dikecilkan otomatis, disimpan di bucket `pengurus`), lalu tampil di bagan, daftar pengurus, dan PDF struktur organisasi.
Pekerja bisa diatur per orang (Pekerja & gaji → ubah data → Struktur organisasi): tampil sebagai petugas keamanan, petugas kebersihan, atau petugas lainnya di bawah pengurus tertentu (mis. Satpam di bawah Koordinator Keamanan), tampil sebagai pengurus dengan jabatan tertentu, atau tidak ditampilkan. Seluruh baris petugas bisa disembunyikan lewat Struktur organisasi → Atur periode.
Petugas (pekerja) kini tampil menempel langsung di bawah kotak pengurus atasannya (mis. Satpam di bawah Seksi/Koordinator Keamanan), termasuk di teks WhatsApp dan PDF. Bila atasan belum dipilih, otomatis dicari Koordinator lalu Seksi sesuai kategori (keamanan/kebersihan).
Foto pekerja diunggah di Pekerja & gaji → ubah data pekerja, tampil di daftar pekerja, bagan, dan PDF struktur organisasi.
Menu Iuran → tombol **Cetak PDF**: daftar pembayaran iuran per bulan (sesuai saringan Semua/Belum/Lunas) berisi blok, nama KK, tanggal bayar, metode, jumlah, status, kolom paraf, rekapitulasi, dan tanda tangan Bendahara & Ketua RT.
Jadwal jaga (Keamanan → Jadwal jaga): nama petugas dipilih dari daftar satpam aktif di menu Pekerja & gaji (bisa lebih dari satu), plus kolom petugas pengganti bila perlu.

### Kebersihan lingkungan
Menu **Kebersihan** (grup Lingkungan): beranda (angkut sampah berikutnya, kegiatan, cek harian, laporan terbuka, aturan & tips), jadwal angkut sampah per jenis (organik/anorganik/besar/B3) dengan pengangkut & TPS + bagikan WA, kegiatan (kerja bakti, fogging/PSN, bersih saluran, pangkas pohon, dll.) dengan absensi warga per rumah & pengumuman otomatis, cek harian petugas per area (petugas dari data Pekerja), dan laporan warga kategori Kebersihan & sampah dengan tanggapan. Warga melihat beranda/jadwal/kegiatan, ringkasan di Rumah saya, dan tombol lapor masalah kebersihan. Hak akses lewat role "Kebersihan lingkungan" (bawaan mengikuti izin Keluhan).
Pemilik bisa membuatkan akun login untuk pekerja (mis. satpam) langsung dari form Pekerja & gaji: login pakai No. HP, role default Satpam, password awal wajib diganti, bisa reset/cabut akses; akses otomatis dicabut bila status pekerja Berhenti.
Jadwal jaga punya hak akses sendiri ("Jadwal jaga satpam" di editor role). Bawaan: satpam hanya lihat; koordinator keamanan, ketua, dan pengurus bisa mengatur.

### Kunci aplikasi (sidik jari / wajah / PIN)
Tombol gembok di header membuka **Keamanan akun**: ganti password, aktifkan sidik jari / Face ID / kunci layar perangkat (WebAuthn platform authenticator), dan PIN aplikasi 4–6 angka (PBKDF2, disimpan hanya di perangkat). Bila aktif, sesi tetap masuk di perangkat itu tetapi aplikasi terkunci saat dibuka ulang atau setelah 5 menit tidak dipakai (menggantikan logout otomatis 30 menit). PIN salah 5 kali = keluar penuh. Selalu ada pilihan "Masuk dengan No. HP & password".

### Catatan teknis (2026-10-24)
Kode aplikasi kini di `public/app.js` (bukan lagi skrip inline di `index.html`) agar CSP bisa melarang skrip inline. Deploy seperti biasa dengan seluruh isi folder `public/`.

### CAPTCHA login (Cloudflare Turnstile)
Pengaturan → Keamanan login → isi **site key** Turnstile (khusus Pemilik). Halaman login lalu memuat verifikasi anti-bot (biasanya tak terlihat, muncul kotak hanya bila mencurigakan) dan mengirim token ke Supabase. Penegakan diaktifkan di dashboard Supabase (Bot and Abuse Protection) dengan **secret key**. Urutan: buat widget → deploy → isi site key → aktifkan di Supabase. Bila bermasalah, matikan dari dashboard Supabase.
