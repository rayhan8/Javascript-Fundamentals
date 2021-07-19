// Variable Lookup
// {} - code blocks

const globalNumber = 5;

function add(num1,num2) {
 const result = num1+num2+globalNumber; // use variable from local scope
 return result;
}

console.log(add(5,7));

// if the variable is in local scope, local variable is gonna take first
const globalName = "Dollar";

function name(name1,name2) {
 const globalName = "pushon";
 const fullName = name1+name2+globalName;
 console.log(fullName);
}

name("mohammad ","rayahn ");

// JS first search variable in local scope, if he don't find it in local scope, then he search it in global scope
const globalScope = 100; // 3rd priority in nested() function

function multiply(a,b) {
 const globalScope = 20; // 2nd priority in nested() function
 const output = a+b+globalScope;

 function nested() {
  const globalScope = 11; // 1st priority in nested() function
  const next = output*globalScope;
  console.log(next);
 }
 nested();

 return output;
}

console.log(multiply(4,5));