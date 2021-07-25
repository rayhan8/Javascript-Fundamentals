// find (Array Method)
// return single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value


// Example 1
const people = [
 {name:"rayhan", age:24, position:"developer", id:1},
 {name:"rafin", age:22, position:"student", id:2},
 {name:"pushon", age:23, position:"talker", id:3},
 {name:"pujan", age:22, position:"engineer", id:4},
]

const perSon = people.find(function(person){
 return person.id === 3;
});

console.log(perSon);


// Example 2
const names = ['dollar','rayhan','rafin'];

console.log(names.find(function(num){
 return num === 'rayhan';
}));