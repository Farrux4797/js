"use strict"

const a = 10,
    b = 5;

console.log(a + b);
console.log(a / b);

let inc = 10,
    dec = 20;

// console.log(inc++);
// console.log(inc);

console.log(dec--);
console.log(dec);

console.log(10 * 2 == 5);
console.log(10 * 2 === "20");


const chekced = true,
    choose = false;

console.log(choose || chekced);
console.log(chekced && choose || chekced);
console.log(chekced && choose || !chekced);
