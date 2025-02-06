# Aplikasi Rak Buku

## Deskripsi
Aplikasi Rak Buku adalah aplikasi sederhana berbasis web yang digunakan untuk mengelola daftar buku. Pengguna dapat menambahkan buku baru, menandai buku yang sudah selesai dibaca, mencari buku berdasarkan judul, dan menghapus buku dari daftar.

## Fitur
- **Menambahkan Buku**: Pengguna dapat menambahkan buku baru dengan mengisi judul, penulis, dan tahun terbit.
- **Menandai Buku**: Buku dapat ditandai sebagai "Selesai dibaca" atau "Belum selesai dibaca".
- **Mencari Buku**: Tersedia fitur pencarian untuk mencari buku berdasarkan judul.
- **Menyimpan Data**: Data buku disimpan menggunakan `localStorage`, sehingga tidak hilang saat halaman direfresh.
- **Menghapus Buku**: Pengguna dapat menghapus buku dari daftar.

## Teknologi yang Digunakan
- **HTML**: Untuk struktur halaman.
- **CSS**: Untuk tampilan dan desain.
- **JavaScript**: Untuk logika aplikasi, termasuk penyimpanan data di `localStorage`.

## Struktur Proyek
```
├── index.html      # Halaman utama aplikasi
├── style.css       # File CSS untuk styling
└── main.js         # Logika aplikasi
```

## Cara Menggunakan
1. **Clone Repository**
   ```sh
   git clone https://github.com/username/repository-name.git
   ```
2. **Buka File index.html**
   - Gunakan browser seperti Chrome atau Firefox untuk membuka `index.html`.
3. **Tambahkan Buku**
   - Isi judul, penulis, dan tahun terbit pada form.
   - Klik tombol "Masukkan Buku ke rak".
4. **Tandai Buku**
   - Klik tombol "Selesai dibaca" untuk memindahkan buku ke daftar selesai dibaca.
   - Klik tombol "Belum selesai dibaca" untuk memindahkan kembali ke daftar belum selesai.
5. **Cari Buku**
   - Masukkan judul buku pada kolom pencarian dan tekan tombol "Cari".
6. **Hapus Buku**
   - Klik tombol "Hapus Buku" untuk menghapus buku dari daftar.

## Sumber Proyek
Proyek ini dikembangkan dengan bantuan materi dan bimbingan dari Dicoding. Terima kasih kepada Dicoding atas materi dan bimbingannya yang luar biasa. Proyek ini tidak akan terwujud tanpa ilmu dan sumber daya yang telah disediakan.

https://www.dicoding.com/
