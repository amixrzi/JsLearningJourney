'use strict'
// Looping Arrays, break & continue

const amir = [
    'Amirhossein',
    'Rezaei',
    2026 - 2007,
    ['Nima', 'Matin', 'Alireza'],
    true
];
const types = [];

for (let i = 0; i < amir.length; i++) {
    // Reading from amir array
    console.log(amir[i], typeof (amir[i]));
    //Filing types array
    // types[i] = typeof (amir[i]);
    types.push(typeof (amir[i]));
}
console.log(types);

const years = [2006, 2007, 1998, 2024];
const age = [];
for (let i = 0; i < years.length; i++) {
    age.push(2026 - years[i]);
}
console.log(age);

// continue and break
console.log('--- ONLY STRING ---');
for (let i = 0; i < amir.length; i++) {
    if (typeof (amir[i]) !== 'string') continue;
    console.log(amir[i], typeof (amir[i]));
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < amir.length; i++) {
    if (typeof (amir[i]) === 'number') break;
    console.log(amir[i], typeof (amir[i]));
}