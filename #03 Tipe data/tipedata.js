// belajar tipe data javascript

// 1. undefined
let x;
console.log(typeof x); // output undefined

// 2. number
let a = 10;
console.log(typeof a);
let b = 12.5;
console.log(typeof b);

// program untuk operator aritmatika
let angkaSatu = 10
let angkaDua = 15;

console.log(angkaSatu + angkaDua);
console.log(angkaSatu - angkaDua);
console.log(angkaSatu / angkaDua);
console.log(angkaSatu * angkaDua);
console.log(angkaSatu % angkaDua);
console.log(angkaSatu ** angkaDua);

// 3. BigInt
// untuk membedakan BigInt dan number tambahkan karakter (n) di akhir angka
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n); // ketika menggunakan BigInt akan dibulatkan ke bawah tampa desimal OUTPUT: 2n bukan 2.5n
console.log(5n % 2n);

// 4. String
let greet = "hello";
console.log(typeof greet);

console.log("Windows path: C:\\Programs Files\\Myproject");
let myName = "muhaemin";
console.log(`Hello, my name is ${myName}`);

// 5. Boolean
let booleanX = true;
let booleanY = false;
console.log(typeof booleanX);
console.log(typeof booleanY);

// 6. Null
let sameLaterData = null;
console.log(sameLaterData); // output null

// 7. Symbol (Indentifer yang unik)
const myNim = Symbol("NIM");
console.log(myNim);
