// Tipe data adalah element dasar yang sering kita disimpan dan olah untuk membuat insturksi.
// Tipe data primitif => string, number, boolean, dan kosong (Null dan Undefined)

console.log("\n===== TIPE DATA JAVASCRIPT ======");
console.log
// STRING
let tipeData = "Ini adalah contoh tipe data string";
console.log(tipeData);

// NUMBER
// Semua data berupa angka direpresentasikan sebagai number, baik itu bilangan bulat maupun pecahan.
// Selain menghasilkan angka normal, number memiliki nilai special, yaitu Infinity dan Nan (Not-a-Number).
// Nilai Infinity dihasilkan ketika melakukan operasi aritmatika yang tidak terdefinisi seperti membagi nilai dengan Nol.
let ankga = 50 / 0;
console.log(ankga);

// Sedangkan Nan dihsilkan nilai non-numerik diubah ke tipe data number. 
let slogan = Number ("Dicoding");
console.log(slogan);

// BOOLEAN
// Boolean adalah tipe data yang memiliki nilai True & False.
let angkaBoolean = 10 > 3;
console.log(angkaBoolean); // True karena 10 lebih besar dari 3.

// NILAI KOSONG = keduanya digunakan untuk menunjukan ketiadaan nilai (the absence of somthing);
// Null = menunjukan nilai tidak ada 
let message = null;
console.log(message);

// Undefined = mendeklarasikan variable tampa menginisialisasi dengan nilai apapun
let menu; 
console.log(menu);


console.log("\n===== Mengubah Nilai Anter Tipe Data ======");
// MENGUBAH TIPE DATA KE STRING
// 1. menggunakan fungsi String()
const number = 124;
const strNumber = String(number);
console.log(`${strNumber} adalah bertipe ${typeof(strNumber)}`);

// 2. menggunakan Method .toString()
const boolean1 = true;
const strBoolean1 = boolean1.toString();
// console.log(strBoolean1)
console.log(`${strBoolean1} adalah bertipe ${typeof(strBoolean1)}`);

// MENGUBAH STRING KE NUMBER
// Menggunakan Number()
const strNumber1 = "123";
const strFloat = "23.4";

const numFromString = Number(strNumber1);
const flotFromSting = Number(strFloat);

console.log(`${numFromString} adalah bertipe ${typeof{numFromString}}`);
console.log(`${flotFromSting} adalah bertipe ${typeof{flotFromSting}}`);

// Menggunakan parseInt() = membaca karekter satu persatu (20cm, 64bit);
const cm = "20cm";
const bit = "64bit";

const intCm = parseInt(cm);
const intBit = parseInt(bit);
