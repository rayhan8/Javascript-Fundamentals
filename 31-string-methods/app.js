// String Methods helps to work with strings

let str = 'Mohammad Rayhan';

console.log(str.charAt(3)); // return character
console.log(str.charAt(str.length-1)); // return character

console.log(str.charCodeAt(3)); // return unicode

console.log(str.indexOf("h")); // return index position
console.log(str.indexOf("z")); // return index position

console.log(str.slice(2,6)); //slice & return new string
console.log(str.slice(-4)); //slice & return new string

console.log(str.toLocaleLowerCase()); // convert string to lower case
console.log(str.toLocaleUpperCase()); // convert string to upper case
console.log(str.toLowerCase()); // return lower case string value
console.log(str.toUpperCase()); // return upper case string value

console.log(str.startsWith("Moha")); // return boolean
console.log(str.startsWith("moha")); // return boolean

console.log(str.includes("mmad")); // return boolean

let num = 45;
console.log(num.toString()); // convert number to string

let str1 = " Rayhan";
console.log(str1.trim()); // remove white space

let text = "Rayhan Dollar";
console.log(text.trim().toLowerCase().startsWith("rayhan"));