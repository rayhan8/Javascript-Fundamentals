// map (Array Method)
// does return a new array
// does not change size of original array
// uses value from original array when making new one


// Example 1
const people = [
 {name:"rayhan", age:24, position:"developer"},
 {name:"rafin", age:22, position:"student"},
 {name:"pushon", age:23, position:"talker"},
 {name:"pujan", age:22, position:"engineer"},
]

const ages = people.map(function(person){
 // console.log(person);
 // return "Hello";
 return person.age + 20;
})

console.log(ages);


// Example 2
const newPeople = people.map(function(person){
 return {
  firstName:person.name.toUpperCase(),
  oldAge:person.age + 20,
 };
});

console.log(newPeople);


// Example 3
const names = people.map(function(person){
 return `<h1>${person.name.toUpperCase()}</h1>`
});

document.body.innerHTML = names.join('');