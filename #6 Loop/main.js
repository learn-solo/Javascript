// for looping biasa
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for of loop (lebih sederhana)
let myArray = ["luke", "muhaemin", "Sandika", "meong"];
for (const arrayItem of myArray) {
  console.log(arrayItem);
}

// while
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// do while
// do while akan dijalankan setidaknya satu kali
let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 10);
