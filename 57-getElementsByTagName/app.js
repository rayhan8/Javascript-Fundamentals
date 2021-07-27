// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementByTagName('tagname')
// node-list = array-like object
// index, length property but not array methods

const heading = document.getElementsByTagName('h2');

console.log(heading); // return node list
heading[0].style.color = 'red';
console.log(heading.length);

const items = document.getElementsByTagName('li');
console.log(items);
items[2].style.color = 'orange';

// items.forEach(function(item){
//  console.log(item);
// })
// get error bcz items is not array, it's array-like object

const betterItems = [...items]; // spread operator
betterItems.forEach(function(item){
 console.log(item);
})

console.log(items);
console.log(betterItems);