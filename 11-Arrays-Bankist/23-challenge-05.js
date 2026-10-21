'use strict';

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1.
dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);
console.log(
  `Sarah's dogs eats tooo ${sarahsDog.curFood > sarahsDog.recFood ? 'much' : 'little'}`,
);

// 3.
const ownersTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersTooMuch);

const ownersTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersTooLittle);

// 4.
console.log(`${ownersTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.every(checkEatingOkay));

// 7.
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log(dogsEatingOkay);

// 8.
const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
  if (dog.curFood < dog.recFood) {
    return 'too-little';
  } else if (dog.curFood > dog.recFood) {
    return 'too-much';
  } else {
    return 'exact';
  }
});
console.log(dogsGroupedByPortion);

// 9.
const dogsGroupedByOwner = Object.groupBy(
  dogs,
  dog => `${dog.owners.length}-owners`,
);
console.log(dogsGroupedByOwner);

// 10.
const sortedDogs = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);
