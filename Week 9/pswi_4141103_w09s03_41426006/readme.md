1. return null artinya function mengembalikan nilai null, yaitu nilai khusus di JavaScript yang berarti “sengaja kosong” atau “tidak ada hasil yang valid”.Baris if (...) return null; adalah penjaga (guard). Kalau jumlah n tidak valid (bukan bilangan bulat, atau kurang dari 1), function langsung berhenti dan mengembalikan null, tanpa menghitung apa pun.

2. Bedakan console.log dari return
=console.log Fungsi > Menampilkan nilai ke Console	
=return Fungsi > Mengembalikan nilai ke pemanggil
Nilai bisa dipakai lagi?	Tidak(console.log)	Ya(return)

3. Perbedaan singkat:
                filter	                        map
Tugas	       > Menyaring elemen	        > Mengubah tiap elemen
Jumlah hasil   > Sama atau lebih sedikit	> Selalu sama dengan aslinya
Contoh di sini > Buang yang kuota 0	        > Object menjadi judul saja

4. DESTRUCTURING DAN SCOPE
Baris Console	                                            |       Artinya
Di dalam block: saya di dalam block (main.js:3)	            |      console.log di dalam { } berhasil, karena pesan memang ada di situ                                    
Uncaught ReferenceError: pesan is not defined (main.js:5)	|      console.log di luar { } gagal, karena pesan sudah tidak ada di luar block                               

5. perintah 1: Block scope dan ReferenceError

**Prediksi:** Baris `console.log` di luar block akan error
ReferenceError karena `pesan` dibuat dengan `const` di dalam `{ }`.

**Kode:**
{
  const pesan = "saya di dalam block";
  console.log("Di dalam block:", pesan);
}
console.log("Di luar block:", pesan);

**Hasil aktual:**
- Di dalam block: `saya di dalam block` (main.js:3)
- Di luar block: `Uncaught ReferenceError: pesan is not defined` (main.js:5)

**Penjelasan:** `const` memiliki block scope, artinya variabel hanya
hidup di dalam `{ }` tempat ia dibuat. Setelah block selesai,
`pesan` tidak bisa diakses lagi, sehingga JavaScript menghasilkan
ReferenceError. Hasil sesuai prediksi.

    Perintah 2: Perbaikan scope

**Perbaikan:** `pesan` dideklarasikan dengan `let` di luar block,
lalu nilainya diisi di dalam block.

**Hasil aktual:** kedua baris tampil tanpa error:
- Di dalam block: `saya di dalam block`
- Di luar block (setelah diperbaiki): `saya di dalam block`

**Penjelasan:** Variabel hanya dibuat di luar block pada bagian yang
memang perlu dibaca dari luar. Variabel lain tetap lokal. Saya tidak
memindahkan semuanya ke global karena variabel global bisa
tertimpa atau berubah dari bagian kode mana pun, sehingga sulit
dilacak saat ada bug.

Function Murni Sederhana
Fungsi hitungTotal(n, harga) memeriksa apakah n bilangan bulat dan tidak kurang dari 1 (Number.isInteger(n) dan n < 1). Jika tidak valid, fungsi mengembalikan null agar tidak menghasilkan total yang salah. Jika valid, fungsi mengembalikan n * harga (contoh: 2 × Rp10.000 = Rp20.000). return mengembalikan nilai yang bisa dipakai ulang, sedangkan console.log() hanya menampilkan hasil ke console.

Koleksi Kegiatan

Tambah 3 kegiatan: filter() hanya mengambil kegiatan berkuota > 0, sehingga HTML dan JavaScript tampil, sedangkan CSS (kuota kosong) tidak.
Semua kuota 0: filter() menghasilkan array kosong [].
Filter + map: filter() menyaring data, lalu map(k => k.judul) mengambil judulnya saja, hasilnya array berisi judul HTML dan JavaScript.

Destructuring dan Scope

Variabel const dalam block {} tidak bisa diakses dari luar, sehingga muncul ReferenceError.
Perbaikannya: letakkan destructuring dan pemanggilan variabel dalam satu fungsi tampilkanKegiatan(), tanpa perlu variabel global.

Module dan Uji

utils.js berisi hitungTotal() yang di-export, lalu main.js memakainya dengan import (hasil 2 × 10.000 = 20.000). HTML memakai type="module".
Server lokal: Live Server diperlukan agar browser dapat memuat module, dan Console menampilkan 20000.
Tabel uji: hitungTotal() diuji dengan berbagai input, serta filter() dan map() diuji pada data kegiatan. Hasilnya menunjukkan fungsi dapat dipakai ulang dan metode koleksi bekerja sesuai tujuan.

-sebelumnya aku meminta bantuan dari AI untuk memperbaiki vs code ku yang tak bisa menjalankan code dan hasil output f12 yang terlihat
-untuk screnshot itu kuambil dari devtolls di bagian console