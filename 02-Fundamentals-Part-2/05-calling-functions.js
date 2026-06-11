// Calling Functions
'use strict'

function cuteFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applesPieces =  cuteFruitPieces(apples);
    const orangesPieces =  cuteFruitPieces(oranges);
    const juice = `Juice with ${applesPieces} piece of apples and ${orangesPieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(4,7));
