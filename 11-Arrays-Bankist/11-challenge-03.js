'use strict';

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//
//   const adultDogs = humanAges.filter(age => age >= 18);
//
//   // const avgDogs =
//   //   adultDogs.reduce((acc, age) => (acc += age), adultDogs[0]) /
//   //   adultDogs.length;
//
//   const avgDogs = adultDogs.reduce(
//     (acc, age, i, arr) => (acc += age / arr.length),
//     0,
//   );
//
//   console.log(ages);
//   console.log(humanAges);
//   console.log(adultDogs);
//   console.log(avgDogs);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg2);
