// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css') - selects single

// use id
const result = document.querySelector('#result');
console.log(result);

// use class
const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);
lastItem.style.backgroundColor = 'green';