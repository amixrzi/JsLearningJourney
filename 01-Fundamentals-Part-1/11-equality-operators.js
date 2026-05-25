// Equality Operators (== vs. ===)
const age = '18';
if (age === 18) console.log('Ypu just became an adult :D (strict)');

if (age == 18) console.log('Ypu just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number!"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is amazing number');
} else if (favourite === 7) {
    console.log('Cool! 7 is amazing number');
} else if (favourite === 9) {
    console.log('Cool! 9 is amazing number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) {
    console.log('why not 23?');
}