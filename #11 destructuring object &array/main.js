// destructuring object ES6 menggunakan object literal ({})
const profile = {
  firsName: "muhaemin",
  lastName: "iskandar",
  age: 25,
};
const { firsName, lastName, age } = profile;
console.log(firsName, lastName, age);

// destructuring assigment
const user = {
  nama: "super user",
  email: "super@gmail.com",
  NIM: 20312035,
};
let nama = "admin";
let email = "admin@gmail.com";
// menginisialisasi nilai baru melalui destructuring object
({ nama, email } = user);
console.log(nama);
console.log(email);
