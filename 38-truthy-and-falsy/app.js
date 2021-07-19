// Truthy And Falsy
// "",'',``,0,-0,NaN,false,null,undefined

// Truthy
const bool = 4<6;
if(bool) {
 console.log("hey it's works");
}

if(true) {
 console.log("it is true");
}

const text = "Hello";
if(text) {
 console.log("it is Truthly");
}
else{
 console.log('it is Falsy');
}

// Falsy
const text1 = "";
if(text1) {
 console.log("it is Truthly");
}
else{
 console.log('it is Falsy');
}

const text2 = ``;
if(text2) {
 console.log("it is Truthly");
}
else{
 console.log('it is Falsy');
}

const num = 0;
if(num) {
 console.log("it is Truthly");
}
else{
 console.log('it is Falsy');
}