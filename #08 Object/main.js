const user = {
  nama: "muhaemin",
  umur: 27,
  jk: "laki-laki",
  kota: "bandung",
};
console.log(`halo nama saya ${user.nama}, saya berasal dari kota ${user.kota}`);
console.log(`dan umur saya adalah ${user.umur}`);
// untuk merubah nilai property gunakan tanda (=)
user.nama = "Paduka Raja";
user[umur] = 22;
console.log(user);
// jika property yang di panggil tidak ada, maka property tersebut akan ditambahkan.
user.hairColor = "lightblue";
console.log(user);
