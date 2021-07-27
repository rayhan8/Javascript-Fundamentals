// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelectorAll ('any css') - select all

const list = document.querySelectorAll('.special');
console.log(list);

// we can use forEach in querySelectorAll
list.forEach(function(item){
 console.log(item);
 item.style.color = 'red';
});