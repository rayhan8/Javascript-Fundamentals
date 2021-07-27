// nextElementSibling
// previousElementSibling
// don't worry about whitespace

const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red';

const second = document.querySelector('#last');
second.previousElementSibling.style.color = 'blue';