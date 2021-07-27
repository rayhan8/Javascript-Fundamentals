// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');

const allChild = result.childNodes;
console.log(allChild);
// printOut: NodeList(11) - count with whitespace

const children = result.children;
console.log(children);
children[2].style.color = 'red';

// whitespace
console.log(result.firstChild);
console.log(result.lastChild);