'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Thu Oct 29 2026 22:41:31'));
console.log(new Date('July 17, 2007'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2029, 8, 2, 23, 22, 1));
console.log(new Date(2029, 8, 32));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with date
const future = new Date(2029, 8, 2, 23, 22);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(1883073120000));

console.log(Date.now());

future.setFullYear(2028);
console.log(future);
