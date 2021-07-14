// functions, return, if, arrays, for loop

// for loop
const one = [20,40,60,55];

function first(arr1) {
 for(let i=0; i<arr1.length; i++) {
  console.log(`index position: ${i}, item is: ${arr1[i]}`);
 }
}

first(one);

// array total
const two = [20,40,60,55];

function second(arr2) {
 let total = 0;
 for(let a=0; a<arr2.length; a++) {
  total+=arr2[a];
  console.log(`item total indivusual: ${total}`);
 }
 console.log(`item total: ${total}`);
}

second(two);

// object
const three = [20,40,60,55];
const four = [10,52,63,25];
const five = [22,31,42,53];

function third(arr3) {
 let together = 0;
 for(let c=0; c<arr3.length; c++) {
  together+=arr3[c];
 }
 return together;
}

const x = third(three);
const y = third(four);
const z = third(five);

console.log({
 p:x,
 q:y,
 r:z,
});

// if statement
const six = [30,45,12,55];
// const six = [10,20,20,30];

function fourth(arr4) {
 let attach = 0;
 for(let d=0; d<arr4.length; d++) {
  attach+=arr4[d];
 }

 if(attach>100){
  console.log(`attach is bigger ${attach}`);
  return attach; // if condition is true, then return this attach
 }
 // else
 console.log(`you are good ${attach}`);
 return attach; // if condition is false, then return this attach
}

fourth(six);

// don't write 20/30 line code & then invoke the function because it's gonna be way more harder to find the bug