// Tipe data adalah element dasar yang sering kita disimpan dan olah untuk membuat insturksi.
// Tipe data primitif => string, number, boolean, dan kosong (Null dan Undefined)

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


console.log("===== Mengubah Nilai Anter Tipe Data ======");
// Mengubah tipe data ke string
// 1. menggunakan fungsi String()
const number = 124;
const strNumber = String(number);
console.log(typeof(strNumber));

// 2. menggunakan Method to.String()
const boolean1 = false;
const strBoolean1 = toString();
console.log(typeof(strBoolean1));