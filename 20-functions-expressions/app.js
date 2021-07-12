// Functions Expressions
// When we create a function and assign it to a variable, known as function expression.

// function definition/declaration 
function addValues(num1,num2) {
 return num1+num2;
}

const firstValue = addValues(5,6);
const secondValue = addValues(9,10);
const result = [firstValue,secondValue,addValues(10,20)];
console.log(result);

// function expression
// when we assign function in a variable.
const add = function (num1,num2) {
 return num1+num2;
}

const output1 = add(5,7);
const output2 = add(9,11);
const final = [output1,output2,add(50,60)]
console.log(final);

// I can't call, function expression before function definition.
// myFun(12,14) - (error)
const myFun = function show(x,y){
 return x+y;
}
const fun = myFun(12,14)
console.log(fun);
// function expression in javascript are not hoisted, unlike function declarations.