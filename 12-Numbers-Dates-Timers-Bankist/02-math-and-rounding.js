'use strict';

console.log(Math.sqrt(36));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(28, 17, 98, 14, 7));
console.log(Math.max(28, 17, '98', 14, 7));
console.log(Math.max(28, 17, '98px', 14, 7));

console.log(Math.min(28, 17, 98, 14, 7));

console.log(Math.PI * Number.parseFloat('15px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(78, 100));
console.log(randomInt(0, 5));

// Rounding integers
console.log(Math.round(68.23));
console.log(Math.round(68.9));

console.log(Math.ceil(68.23));
console.log(Math.ceil(68.9));

console.log(Math.floor(68.23));
console.log(Math.floor('68.9'));

console.log(Math.trunc(68.23));
console.log(Math.trunc(68.9));

console.log(Math.trunc(-68.23));
console.log(Math.floor(-68.23));

// Rounding decimal
console.log((8.5).toFixed(0));
console.log((8.5).toFixed(3));
console.log((8.588).toFixed(2));
console.log(+(8.588).toFixed(2));
