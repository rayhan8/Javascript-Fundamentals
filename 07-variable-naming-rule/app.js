// con contain digits, letters, underscore, $
// must start with letter, $ or _
let random123_$ = "random";
console.log(random123_$);

let $random123_$ = "random";
console.log($random123_$);

// cannot start with number
let 123random = "random"; // (error)

// no keyword
let let = "random" // (error)

// case sensitive - fullname vs Fullname
let fullname = "random";
console.log(fullName); // (error)

// camelCase or underscore
let fullName = "random";
console.log(fullName);

let full_name = "random";
console.log(full_name);