// reduce
// iterates, callback function
// reduces to a string value - number, array, object
// 1 Parameter ('acc') - total of all calculations
// 2 Parameter ('curr') - current iteration/value 

const people = [
 {name:"rayhan", age:24, position:"developer", id:1, salary:200},
 {name:"rafin", age:22, position:"student", id:2, salary:300},
 {name:"pushon", age:23, position:"talker", id:3, salary:400},
 {name:"pujan", age:22, position:"engineer", id:4, salary:500},
]

const total = people.reduce(function(acc,curr){
 console.log(`total ${acc}`);
 console.log(`current money: ${curr.salary}`);
 acc+=curr.salary;
 return acc;
},50); // 50 is initial value

console.log(total);

// 50 return number
// [] return array
// {} return object