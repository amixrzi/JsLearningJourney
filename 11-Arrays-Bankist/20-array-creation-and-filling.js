'use strict';
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array([1, 2, 3, 4, 5, 6, 7]));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(x => 4));
x.fill(1, 2, 6);
console.log(x);
x.fill(1);
console.log(x);

arr.fill(19, 2, 6);
console.log(arr);
