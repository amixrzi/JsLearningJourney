// type Conversion and Coercion

// type conversion
const inputYear = '2007';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Amir'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("i'm" + 18 + "years old");
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // n = '11'
n = n -1 ;
console.log(n);
