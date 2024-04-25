// array adalah tipe data yang dapat mengelompokan lebih dari satu nilai &  menepatkan nya didalam varibale
let myArray = ["Ibu", 12, 32.5, true, "programmer"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log("Panjang Nilia Array " + myArray.length + ".");

//Manipulasi array
// (push) menambahkan nilai diakhir array
myArray.push(false);
console.log(myArray);

// (pop) mengeluarkan nilai diakhir arrya
myArray.pop();
console.log(myArray);

// (unshift) menambahkan nilia diawal array
myArray.unshift("sayang");
console.log(myArray);

// (shift) mengeluarkan nilai diawal array
myArray.shift();
console.log(myArray);

// (delete) menghapus data pada index = membiarkan posisi tersebut kososong
delete myArray[0];
console.log(myArray);

// (splice) menghapus element
myArray.splice(0, 1); // menghapus dari index 0, sebanyak 1 element
console.log(myArray);
// NOTE* splice juga bisa digunakan untuk menambahkan element, dengan memberikan argument ke-3
myArray.splice(2, 1, "baru"); //menambahkan argument selanjutnya ("baru")
console.log(myArray);
