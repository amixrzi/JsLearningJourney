'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
const reversedMovements = movements.toReversed();
console.log(reversedMovements);
console.log(movements);

const sortedMovements = movements.toSorted((a, b) => a - b);
console.log(sortedMovements);
console.log(movements);

const splicedMovements = movements.toSpliced(2, 6);
console.log(splicedMovements);

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements);
