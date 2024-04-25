// variable let
let namaHari = "Senin";
console.log(namaHari);
/*
 1. harus dimulai dengan huruf atau underscore (_)
 2. dapat terdiri dari angka, huruf, underscore
 3. tidak bole menggandung spasi DIREKOMENDASIKAN secara camelCase (namaHari, namaMobil)
 4. tidak bole menggandung karekter spesial

 */

// variable const
// variable const tidak bisa di ubah diubah ketika sudah di inisialisasi, dan akan error jika ubah nilianya
const a = 100;
console.log(a);

a = 200;
console.log(a); // output : TypeError: Assigment to constant variable
