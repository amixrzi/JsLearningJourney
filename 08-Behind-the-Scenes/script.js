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

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);
//
// var me = 'Amir';
// let job = 'student';
// const year = 2007;
//
// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));
//
// function addDecl(a, b) {
//   return a + b;
// }
//
// const addExpr = function (a, b) {
//   return a + b;
// };
//
// var addArrow = (a, b) => a + b;
//
// // Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();
//
// var numProducts = 10;
//
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
//
// var x = 1;
// let y = 2;
// const z = 3;
//
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

///////////////////////////////////////
// The this Keyword in Practice
//
// console.log(this);
//
// const calcAge = function (brithYare) {
//   console.log(2026 - brithYare);
//   console.log(this);
// };
// calcAge(2007);
//
// const calcAgeArrow = brithYare => {
//   console.log(2026 - brithYare);
//   console.log(this);
// };
// calcAgeArrow(2006);
//
// const amir = {
//   year: 2007,
//   calcAge: function () {
//     console.log(this);
//     console.log(2026 - this.year);
//   },
// };
// amir.calcAge();
//
// const mobina = {
//   year: 2006,
// };
// mobina.calcAge = amir.calcAge;
//
// mobina.calcAge();
//
// const f = amir.calcAge;
// f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
//
// // var firstName = 'Mamad';
//
// const amir = {
//   year: 2007,
//   firstName: 'Amir',
//   calcAge: function () {
//     // console.log(this);
//     console.log(2026 - this.year);
//
//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1998 && self.year <= 2010);
//     //   // console.log(this.year >= 1998 && this.year <= 2010);
//     // };
//
//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1998 && this.year <= 2010);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// amir.greet();
// amir.calcAge();
//
// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3);
// addExpr(3, 4, 5, 6);
//
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3);

///////////////////////////////////////
// Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Abraham',
  age: 20,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}
const marriedJessica = marryPerson(jessica1, 'Parker');

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Parker';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Abraham',
  age: 20,
  family: ['Patrik, Ross'],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Parker';

// jessicaCopy.family.push('Mobina');
// jessicaCopy.family.push('Amir');
//
// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);

jessicaClone.family.push('Mobina');
jessicaClone.family.push('Amir');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
