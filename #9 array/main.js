// array adalah tipe data yang dapat mengelompokan lebih dari satu nilai &  menepatkan nya didalam varibale
let myArray = ["domba", 23, 45.23, true, "programming"];
// pemanggilan array dengan index
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("panjang nilai array adalah " + myArray.length + ".");

// manipulasi data array
// PUSH() -> menambahkan data diakhir array
myArray.push(false);
console.log(myArray);

// POP() -> mengeluarkan data di akhir array
myArray.pop();
console.log(myArray);

// UNSHIFT() -> menambahkan data di awal array
myArray.unshift("new");
console.log(myArray);

// SHIFT() -> mengeluarkan data di awal array
myArray.shift();
console.log(myArray);

// DELETE -> menghapus data dan membiarkan posisi tersebut kosong
delete myArray[1];
console.log(myArray);

// SPLICE() -> menghapus data + element
myArray.splice(2.1); //menghapus dari index 2 sebanyak 1 element
console.log(myArray);
