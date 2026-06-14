// Dot vs. Bracket Notation
'use strict'

const amir = {
    firstName: 'Amir',
    lastName: 'Rezaee',
    age: 2026 - 2007,
    job: 'student',
    friends: ['Nima', 'Matin', 'Alireza']
}

console.log(amir);

console.log(amir.lastName);
console.log(amir['lastName']);

const nameKey = 'Name';
console.log(amir['first' + nameKey]);
console.log(amir['last' + nameKey]);

// console.log(amir.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Amir? Choose between firstName, lastName, age, job, and friends.');
if (amir[interestedIn]) {
    console.log(amir[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.')
}

amir.location = 'Iran';
amir['twitter'] = '@amixrzi';
console.log(amir);

// Challenge
console.log(`${amir.firstName} has ${amir.friends.length} friends, and his best friends is called ${amir.friends[0]}`);