// Functions
'use strict'

function logger() {
    console.log('My name is amir');
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);

const orangesJuice = fruitProcessor(2, 4);
console.log(orangesJuice);

const num = Number('19');
