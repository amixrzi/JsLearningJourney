'use strict';

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 9);

console.log(87834896446238938643268846283n);
console.log(BigInt(9836245));

// Operations
console.log(10000n + 10000n);
console.log(7847896465634756782908n * 1000000n);

const huge = 813687623767545372343656764n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 19);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!!');

// Divisions
console.log(11n / 3n);
console.log(11 / 3);
