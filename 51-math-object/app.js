// Math
// Standard built-in objects - always available

// floor
const num1 = 4.56789;
const out1 = Math.floor(num1);
console.log(out1);

// floor
const num2 = Math.floor(8.99999);
console.log(num2);

// ceil
const num3 = 4.56789;
const out3 = Math.ceil(num3);
console.log(out3);

// sqrt
const num4 = 25;
const out4 = Math.sqrt(num4);
console.log(out4);

// PI
const out5 = Math.PI;
console.log(out5);

// min
const out6 = Math.min(4,5,6,7,8,9);
console.log(out6);

// max
const out7 = Math.max(4,5,6,7,8,9);
console.log(out7);

// random
const out8 = Math.random();
console.log(out8);

// random number (1-10)
const out9 = Math.random()*10;
console.log(out9);

// random number (1-10) with floor
const out10 = Math.floor(Math.random()*10); // problem : 1 number is missing
console.log(out10);

// solution-1 : random number (1-10) with ceil
const out11 = Math.ceil(Math.random()*10); // get number 1
console.log(out11);

// solution-2
const out12 = Math.floor(Math.random()*10+1); // get number 1,0,9 etc
console.log(out12);