// Date

const months = [
 'January',
 'February',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December'
]

const days = [
 'Saturday',
 'Sunday',
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday'
]

// const date = new Date();
const date = new Date('1/12/2010');

console.log(date);

const month = date.getMonth();
console.log(month); // return index position
console.log(months[month]);

const day = date.getDay();
console.log(day); // return index position
console.log(days[day]);

console.log(`current date is : ${date.getDate()}`);

console.log(`current year is : ${date.getFullYear()}`);

const sentence = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
console.log(sentence);

document.body.innerHTML = sentence;