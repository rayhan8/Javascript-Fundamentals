// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first');
console.log(first);

const second = first.nextSibling; // return whitespace
console.log(second);

const second2 = first.nextSibling.nextSibling;
console.log(second2);
second2.style.color = 'red';

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);

console.log(last.nextSibling.nextSibling);