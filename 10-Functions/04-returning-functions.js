'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet('Hey');
greetingHey('Amir');
greetingHey('Mobina');

greet('Hello')('Amir');

// Challenge
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hello')('Nima');
