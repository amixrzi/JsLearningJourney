'use strict';

// function calcAge(birthYear) {
//   const age = 2026 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age}, bron in ${birthYear}`;
//     console.log(output);
//
//     if (birthYear >= 1998 && birthYear <= 2010) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Mobina';
//
//       // Re assigning outer scope's variable
//       output = 'NEW OUTPUT!';
//
//       const str = `Oh, and you a millenial, ${firstName}`;
//       console.log(str);
//
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(3,5));
//     console.log(output);
//   }
//   printAge();
//
//   return age;
// }
// const firstName = 'Amir';
// calcAge(2007);
// // console.log(age);
// // printAge();

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Amir';
let job = 'student';
const year = 2007;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
