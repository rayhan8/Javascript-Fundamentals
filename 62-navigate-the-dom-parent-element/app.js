// Navigate The Dom - Parent Element

const heading = document.querySelector('h2')
// Chain
console.log(heading);
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement.parentElement.parentElement);

const parent = heading.parentElement;
parent.style.color = 'red';