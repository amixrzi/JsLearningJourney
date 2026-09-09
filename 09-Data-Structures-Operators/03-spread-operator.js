'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 1,
    time = '11:11',
    address = 'London',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} wil be delivered to ${address} at ${time}`,
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

const arr = [5, 6, 7];
const badNewArr = [3, 4, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [3, 4, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Kebab'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log('mainMenuCopy:', mainMenuCopy);

//Join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('menu:', menu);

// Iterable: arrays, string, map, set. NOT objects
const str = 'Amir';
const letters = [...str, '', 'M.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Rezai`);

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! ingredients 1?"),
  // prompt('ingredients 2?'),
  // prompt('ingredients 3?'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurants = { foundedIn: 2007, ...restaurant, founder: 'Nolan' };
console.log(newRestaurants);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Atlas';
console.log(restaurantCopy.name);
console.log(restaurant.name);
