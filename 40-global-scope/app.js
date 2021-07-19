// Global Scope - Global Variable
// any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the program
// Gotchas : name collisions (can not use same variable name), modify by mistake (be carefull)

let name = "Rayhan"; // global scoped
name = "Dollar"; // modify
// const name = "puson"; // get error

// modifying
function calculate() {
 // some code here...
 console.log(name);
 name = "Orange";
 function inner() {
  name="inner name value"; // modify
  console.log(`the value of name is ${name}`);
 }
 inner(); // modify activated
}
calculate(); // modify variable(inside function) will be activated, when the function invoke

// without invoke, function would have nothing to do with our global variable

// same as if statement
if(true) {
  // some code here...
 console.log(name);
 name = "Pants";
}

console.log(`my name is ${name}`);