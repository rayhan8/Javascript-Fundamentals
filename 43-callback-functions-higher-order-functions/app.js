// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable(expression), passed as an argument to another function, return from the function(closure)
// Higher Order Function - accepts another function as an argument or returns another function as a result
// Callback Function - passed to a another function as an argument and executed inside that function


// Callback Function
function callBackOne() {
 console.log(`good morning puson`);
}

// Higher Order Function
function funcOne(name, callBack) {
 const myName = 'rayhan';
 console.log(`${name}, my name is ${myName}`);
 callBack(); // invoke callback function
}

funcOne("Dollar",callBackOne);


// Callback Function
function callBackTwo(parameter) {
 return `good morning ${parameter.toUpperCase()}`
}

// Higher Order Function
function funcTwo(name2,callBack2) {
 const dollar = "Dollar";
 console.log(`${callBack2(name2)} ,my name is ${dollar}`);
}

funcTwo("pushon",callBackTwo);


// Callback Function
function callBackThree(parameter3) {
 return `good afternoon ${parameter3.repeat(3)}`
}

// Higher Order Function
function funcThree(name3,callBack3) {
 const tahjid = "Tahjid";
 console.log(`${callBack3(name3)}, call to ${tahjid}`);
}

funcThree("Pushon",callBackThree);