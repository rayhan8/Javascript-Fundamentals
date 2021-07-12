// Functions - Parameters, Arguments

// Parameters - when declare / define
// Placeholders, local vars
// arguments - when invoke/call/run 
// use variables / values, multiple Parameters, undefined

const pushon = 'Pushon';

function hello(name) {
 console.log("Hello "+name);
}
// name - Parameter

hello('dollar');
// 'dollar' - Argument
hello(pushon);
// pushon - Argument (comes from variable)

// multiple Parameters

const dolly = "valorant";

function greet(first,second) {
 console.log("Hey "+first);
 console.log("Hey "+second);
}

greet("rafin",dolly);