// Array Operations
'use strict'

const friends = ['Nima', 'Matin', 'Alireza'];

// Add elements
const newLength =friends.push('Mobina');
console.log(friends);
console.log(newLength);

friends.unshift('Makima');
console.log(friends);

// Remove elements
friends.pop(); // Last
const poped = friends.pop();
console.log(poped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Nima'));
console.log(friends.indexOf('Reze'));

friends.push(23);
console.log(friends.includes('Nima'));
console.log(friends.includes('Reze'));
console.log(friends.includes(23));

if (friends.includes('Mobina')){
    console.log('you have a friend called Mobina');
} else {
    console.log('you have not a friend called Mobina');
}
