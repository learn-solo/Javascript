// contoh 1
const hujan = true;
console.log("Persiapan sebelum berangkat kegiatan: ");

if (hujan) {
  console.log("Hari ini hujan. Bawa payung.");
}
console.log("berangkat kegiatan");

// contoh  2
let x = 50;
if (x > 70) {
  console.log(x);
} else {
  console.log("nilai kurang dari 70");
}

// contoh 3
let bahasa = "sunda";
let pengucapan = "kumaha damang?";

if (bahasa === "jawa") {
  pengucapan = "pripun mbah";
} else if (bahasa === "sunda") {
  pengucapan = "kumaha damang?";
} else if (bahasa === "japeng") {
  pengucapan = "ohayog gozaimatsu";
}

// CONDITIONAL EXPRESSIONS
// conditon ? true expression : false expression
let isMember = false;
let discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100} %`);

// TRUTHY & FALSY
let nama = "";
if (nama) {
  console.log(`Hello ${nama}`);
} else {
  console.log("nama masih kosong");
}

//STATEMENT SWITCH
let language = "French";
let greeting = null;
switch (language) {
  case "English":
    greeting = "Good Morning";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimatsu";
    break;
  default:
    greeting = "Selamat Pagi Pemuda";
}
console.log(greeting);
