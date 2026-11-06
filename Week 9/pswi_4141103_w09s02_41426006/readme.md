teks + 1 menghasilkan “21” karena teks berupa string, sehingga operator + menggabungkan teks (concatenation). Number(teks) + 1 menghasilkan 3 karena Number() mengubah “2” menjadi angka 2, lalu dijumlahkan dengan 1.
typeof teks menunjukkan tipe string, sedangkan typeof Number(teks) menunjukkan tipe number.
Number("abc") menghasilkan NaN karena “abc” tidak dapat dikonversi menjadi angka. Number.isFinite(hasil) menghasilkan false karena NaN bukan angka yang valid.
Number("") menghasilkan 0. teks === "" menghasilkan true karena teks berisi string kosong.
Percobaan 1 – Prediksi dua hasil
Variabel jumlah bernilai “3” dikonversi dengan Number(), lalu dicek menggunakan Number.isInteger() dan harus berada di antara 1 sampai 5. Jika tidak memenuhi, tampil “Jumlah tidak valid”. Jika memenuhi, program menghitung total harga dengan jumlah × Rp10.000.
Percobaan 2 – Uji input 0, 1, 5, 6, dan 1.5
Input 0 dan 6 tidak valid karena di luar rentang, 1 dan 5 valid, dan 1.5 tidak valid karena bukan bilangan bulat. Jadi program hanya menerima bilangan bulat 1 sampai 5.
Percobaan 3 – Ganti sumber dengan abc
Number("abc") menghasilkan NaN, sehingga Number.isInteger() bernilai false dan program menampilkan “Jumlah tidak valid”.
Percobaan 3 item
Perulangan for...of membaca array secara berurutan (HTML, CSS, Audit) dan menampilkannya dengan console.log(), sehingga menghasilkan tiga keluaran.
Percobaan array kosong
Karena array kosong, for...of tidak punya data untuk diproses sehingga tidak ada keluaran sama sekali.
Percobaan 4 item
Setelah JavaScript ditambahkan ke array, for...of otomatis ikut membacanya sehingga tampil empat judul tanpa perlu mengubah perulangannya.