// Objects

// Variable can store single value at a time

// store student details
var name = 'Rayhan';
var age = 24;
var cgpa = 3.5;
var lang = ["Bangla","English"]

// Object can store multiple value at a time

var student1 = {
 name : "Rafin",
 lastName : "Tahjid",
 age : 22,
 education : 'Buet',
 subjects : ["chemical","physics","math"],
 gretting : function() {
  console.log("Hello Bangla Polapain");
 },
 // ES6
 happyMe() {
  console.log("I am Happy");
 },
}

// access properties or invoke methods by using - dot notation
console.log(student1.name);
console.log(student1.age);
console.log(student1.education);
student1.gretting();
student1.happyMe();
const last = student1.lastName;
console.log(last);

// modify
student1.name = "puson";
console.log(student1.name);