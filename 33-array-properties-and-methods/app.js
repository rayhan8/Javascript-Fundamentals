// Array Properties And Methods

let names = ['john','bobo','barry','olga','ben','ten','rayhan'];

// Property
// length
console.log(names.length);
console.log(names[4]);
console.log(names[names.length-1]);

// concat
const lastNames = ['peter','onion','banana'];
const allNames = names.concat(lastNames);
console.log(allNames);

// methods
// reverse()
console.log(allNames.reverse());

// unshift() - add item at the beginning of the array
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);

// shift() - remove item at the beginning of the array
allNames.shift();
console.log(allNames);

// push() - add item at the end of the array
allNames.push('dollar');
console.log(allNames);

// pop() - remove item from the end of the array
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);

// splice(start index, how many item it takes) - mutates original array
const specificName = allNames.splice(1,1);
console.log(specificName);
console.log(allNames);

const alpha = ['a','b','c','d','e','f','g','h'];
const alphabet = alpha.splice(2,1);
console.log(alphabet);
console.log(alpha);