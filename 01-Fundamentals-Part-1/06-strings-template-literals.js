// Strings and Template Literals
const firstName = 'Amir';
const job = 'student';
const brithYear = 2007;
const year = 2026;
const amir = "i'm" + ' ' + firstName + " , a " + (year - brithYear) + " year old " + job + "!";
console.log(amir);

const  amirNew = `i'm ${firstName} , a ${year - brithYear} year old ${job}!`;
console.log(amirNew);

console.log(`just a regular string...`);
console.log('string with \n\
multiplay \n\
lines');

console.log(`string with
multiplay
lines`)