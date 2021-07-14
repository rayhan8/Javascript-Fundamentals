// Arrays and for loop

const names = ['anna', 'susy', 'bob'];
const lastName = 'dollar';
const goodName = "banana";
let newArray = [];
let wowArray = [];
let pushArray = [];

// for loop
for(let i=0; i<names.length; i++) {
 console.log(i);
 console.log(names[i]);
 newArray.push(names[i]);
 wowArray.push(`${names[i]} ${lastName}`);
 const fullName = `${names[i]} ${goodName}`;
 pushArray.push(fullName);
}

console.log(names);
console.log(newArray);
console.log(wowArray);
console.log(pushArray);