// filter (Array Method)
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
 {name:"rayhan", age:24, position:"developer"},
 {name:"rafin", age:22, position:"student"},
 {name:"pushon", age:23, position:"talker"},
 {name:"pujan", age:22, position:"engineer"},
]

// Example 1
const engineer = people.filter(function(person){
 return person.position === "engineer";
});

console.log(engineer);


// Example 2
const youngPeople = people.filter(function(person){
 return person.age <=22;
});

console.log(youngPeople);


// Example 3
const developer = people.map(function(person){
 return person.position === "Senior Developer";
});

console.log(developer);