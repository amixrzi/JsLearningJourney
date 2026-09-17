'use strict';

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B742'[0]);

console.log(airline.length);
console.log('B742'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-3));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat😑');
  else console.log('You got lucky😛');
};
checkMiddleSeat('11B');
checkMiddleSeat('98A');
checkMiddleSeat('287E');

console.log(new String('Amir'));
console.log(typeof new String('Amir'));

console.log(typeof new String('Amir').slice(1));
