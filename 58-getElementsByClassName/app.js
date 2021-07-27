// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');
// node-list = array-like object
// index, length property but not array methods

const listItems = document.getElementsByClassName('special');
console.log(listItems);

listItems[1].style.color = 'red';
listItems[2].style.fontSize = '2rem';