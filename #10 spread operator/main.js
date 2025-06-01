// Belajar spread operator
// Sebelum menggunakan spread operator
const kahayang = ["seafood", "salad", "nugget", "soup"];
console.log(kahayang);

// setelah menggunakan spread operator
console.log(...kahayang);

console.log("=========================================");

// Spread operator juga bisa untuk menggabungkan array
// Sebelum
const other = ["nasi goreng", "pizza", "keripik"];
const allkahayang = [kahayang, other];
console.log(allkahayang);

// Sesudah
const allOther = [...kahayang, ...other];
console.log(allOther);

// Spread operator juga bisa digunakan untuk object literals
let user1 = { firtName: "muhaemin", age: 20 };
let user2 = { lastName: "tikukuruk", gender: "M" };
let allUser = { ...user1, ...user2 };
console.log(allUser);
