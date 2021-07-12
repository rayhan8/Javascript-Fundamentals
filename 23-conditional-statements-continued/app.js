// Conditional Statements Continued
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !===
// else if and !

const num1 = 4;
const num2 = 6;
if(num1>num2) {
 console.log("first number is bigger than second number");
}
else{
 console.log("second number is bigger than first number");
}

const num3 = 6;
const num4 = 6;
if(num3>num4) {
 console.log("first number is bigger than second number");
}
else{
 console.log("second number is bigger than first number");
}

// else if syntax
const result = num3 >= num4;
if(num3>num4) {
 console.log("first number is bigger than second number");
}
else if(result) {
 console.log("both number are equal");
}
else{
 console.log("second number is bigger than first number");
}

var c = 10;
if(c==11){
 console.log("rayhan");
}
else if(c==12){
 console.log("dollar");
}
else if(c==10){
 console.log("c is 10");
}
else{
 console.log("bangladesh");
}

// ! means oposite
const v = false;
if(!v) {
 console.log("value is false");
}