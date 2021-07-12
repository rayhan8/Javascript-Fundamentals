// functions return
// 1 inch = 2.54 cm

const width = 0;
const height = 0;
const dimensions = [width,height];
console.log(dimensions);

// default undefined
const wallHeight = 80;

function calculate(value) {
 console.log("The value in cm is: "+(value*2.54)+" cm");
}

const width2 = calculate(100);
const height2 = calculate(wallHeight);

const dimensions2 = [width2,height2];
console.log(dimensions2);

// return statement
// if I use variable in function, I need must use return in function.
function score(number) {
 const cricket = number*2;
 return cricket;
}
// When I return a value, I gonna have to assign a variable in order to hold it, otherwise i don't see any output in the browser console
// ex : score(10)
const a = score(10);
console.log(a);

// return statement - another example
function run(score) {
 const match = score*4;
 return match;
}
console.log(run(100));

// shortcuts
function dollar(num) {
 return num*2.54;
}
const b = dollar(80);
console.log(b);

// ignores after
function ignore(result) {
 return result+2;
 // ignore all codes after return
 console.log("Hello World");
 console.log("Hello People");
}