// Belajar spread operator
// Sebelum menggunakan spread operator
const favorite = ["seafood", "salad", "nugget", "soup"];
console.log(favorite);

// setelah menggunakan spread operator
console.log(...favorite);

console.log("=========================================");

// Spread operator juga bisa untuk menggabungkan array
// Sebelum
const other = ["nasi goreng", "pizza", "keripik"];
const allFavorite = [favorite, other];
console.log(allFavorite);

// Sesudah
const allOther = [...favorite, ...other];
console.log(allOther);
