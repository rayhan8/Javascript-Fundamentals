const people = [
 {name:"rayhan", age:24, position:"developer", id:1},
 {name:"rafin", age:22, position:"student", id:2},
 {name:"pushon", age:23, position:"talker", id:3},
 {name:"pujan", age:22, position:"engineer", id:4},
]

// filter (return a new array)
const filter = people.filter(function(person){
 return person.id === 3;
});

console.log(filter);
console.log(filter[0].name);


// find
const find = people.find(function(person){
 return person.id === 3;
});

console.log(find);
console.log(find.name);