// COMPARISON OPERATOR
let a = 10;
let b = 5;

console.log((a += b)); //artinya a = a + b
console.log((a -= b)); //artinya a = a - b
console.log((a *= b)); //artinya a = a * b
console.log((a /= b)); //artinya a = a / b
console.log((a %= b)); //artinya a = a % b
console.log((a **= b)); //artinya a = a ** b

// sama vs identik (== vs ===)
let aString = "10";
let aNumber = 10;
console.log(aString == aNumber); //true, karena membadingkan 2 nilia
console.log(aString === aNumber); //false, karena membandingkan 2 nilai + tipe datanya

// LOGICAL OPERATOR
let x = 10;
let y = 12;
// AND (&&) Operator
console.log(x < y && y > 10);
console.log(x > 12 && 12 < 10);
// OR (||) Operator
console.log(x > 6 || y < 19); //true || true -> true
console.log(10 > y || 10 < 12); //false || true -> false
// NOT (!) Operator
console.log(!(x < 15)); //output true, -> false
console.log(!(x < y && y > x)); //output !(true && true) -> true ->false
