'use strict';

// Split and join
console.log(...'a+very+nice+string'.split('+'));
console.log('Amirhossein Rezaei'.split(' '));

const [firstName, lastName] = 'Amirhossein Rezaei'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('amirhossein rezaei');
capitalizeName('matin afzali');
capitalizeName('alireza');

// Padding
const massage = 'Go to gate 12';
console.log(massage.padStart(25, '+').padEnd(30, '+'));
console.log('Amir'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCart = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCart(22221234));
console.log(maskCreditCart(907386625653));
console.log(maskCreditCart(603719827435281));

// Repeat
const massage2 = 'Bad weather... All Departures Delayed...';
console.log(massage2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in lines ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(12);
planesInLine(2);
