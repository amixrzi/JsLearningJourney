'use strict';

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposits = mov => mov > 0;
console.log(movements.some(deposits));
console.log(movements.every(deposits));
console.log(movements.filter(deposits));
