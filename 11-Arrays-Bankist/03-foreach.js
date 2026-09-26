'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: withdrew ${Math.abs(movement)}`);
  }
});
