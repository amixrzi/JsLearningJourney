// Arrays
'use strict'

const friend1 = 'Nima';
const friend2 = 'Matin';
const friend3 = 'Alireza';

const friends = ['Nima', 'Matin', 'Alireza'];
console.log(friends);

const y = new Array(2026, 2006, 2007);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'mobina';
console.log(friends);
// friends = ['Shayan', 'Mohamad'];

const firstName = 'Amir';
const Amir = [firstName, 'Rezaee', 2026 - 2007, 'student', friends];
console.log(Amir);
console.log(Amir.length);

// Exercise
const calcAge = function (birthYear) {
    return 2026 - birthYear;
}
const year = [2020, 1998, 2007, 2006, 2015];
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(year[2]), calcAge(year[3]), calcAge(year[year.length - 1])];
console.log(ages);