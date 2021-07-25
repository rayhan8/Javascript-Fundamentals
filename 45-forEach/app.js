// forEach (Array Method)
// does not return new array

const people = [
 {name:"rayhan", age:24, position:"developer"},
 {name:"rafin", age:22, position:"student"},
 {name:"pushon", age:23, position:"talker"},
]

// callback function
// function showPerson(person) {
//  console.log(person.name.toUpperCase());
// }

// people.forEach(showPerson);

people.forEach(function(item){
 console.log(item.position.toUpperCase());
});