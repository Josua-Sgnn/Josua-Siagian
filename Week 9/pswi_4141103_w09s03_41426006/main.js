import { hitungTotal } from "./utils.js";


console.log(hitungTotal(2, 10000));
console.log(hitungTotal(3, 10000));


const kegiatan = [
    { id: 1, judul: "HTML", kuota: 20 },
    { id: 2, judul: "CSS", kuota: 0 },
    { id: 3, judul: "JavaScript", kuota: 15 }
];

const tersedia = kegiatan.filter(k => k.kuota > 0);
const daftarJudul = tersedia.map(k => k.judul);

console.log(tersedia);
console.log(daftarJudul);