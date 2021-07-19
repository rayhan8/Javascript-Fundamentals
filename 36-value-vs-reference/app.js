// Reference Vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = Object
// typeof

// When assign primitive data type value to a variable any changes are made directly to that value, without affecting original value
const number = 1;
let number2 = number;
number2=7;
console.log(`The first value is ${number}`); // print 1
console.log(`The second value is ${number2}`); // print 7

// When assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references
let person = {name:'rayhan'};
let person2 = person;
person2.name = 'susy';
console.log(`The name of first person is ${person.name}`); // print susy
console.log(`The name of second person is ${person2.name}`); // print susy