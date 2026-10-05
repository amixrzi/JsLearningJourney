'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

const lastestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000,
);
console.log(lastestLargeMovementIndex);

console.log(
  `Your lastest lastest movement was ${movements.length - lastestLargeMovementIndex} movements ago`,
);
