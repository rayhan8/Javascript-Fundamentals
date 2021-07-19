// Local Scope
// can not be access from outside code blocks {}
// if - Not var

let name = 'bobo';

function calculate() {
 const name1 = "rayhan" // local scoped
}
calculate();
// console.log(name1); // (error) can not access outside

// same as if statement
if(true) {
 const name2 = "Army";
}
// console.log(name2); // (error) can not access outside

// we can not access variable from outside without function return
function num() {
 const num = 55;
 return num;
}
// console.log(num());
const a = num();
console.log(a);

// without const, let - local variable convert to a global variable
// use const, let to protect our variable to convert
function convert() {
 becomeGlobal="converted global variable";
}
convert();
console.log(becomeGlobal);

// can not be access from outside code blocks {}
{
 const name = "monir";
 const name2 = "masum";
}
// console.log(name2); // (error) can not access outside