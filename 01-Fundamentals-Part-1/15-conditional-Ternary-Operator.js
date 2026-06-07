// The Conditional Ternary Operator

const age = 19;
age >= 18 ? console.log('I like to drink wine, but it is haram bro 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18){
    drink2 = 'wine 🍷';
} else if (age < 18){
    drink2 = 'water 💧'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧' }`);