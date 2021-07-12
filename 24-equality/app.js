// Equality
// == checks only value
// === checks value and type

const num1 = 6;
const num2 = 6;
const value = num1==num2;
const value2 = num1===num2;
console.log(value);
console.log(value2);

const num3 = 6;
const num4 = '6';
const value3 = num3==num4;
const value4 = num3===num4;
console.log(value3);
console.log(value4);

// != checks only value
// !== checks value and type

const val1 = 6;
const val2 = 10;
const result1 = val1!=val2;
const result2 = val1!==val2;
console.log(result1);
console.log(result2);

const val3 = 6;
const val4 = "6";
const result3 = val3!=val4; // here 6 & '6' are same
const result4 = val3!==val4;
console.log(result3);
console.log(result4);