// Basic Operators & Operator Precedence

// Math operators
const now = 2026;
const ageAmir = now - 2007;
const ageMobina = now - 2006;
console.log(ageAmir, ageMobina);
console.log(ageAmir * 2, ageAmir / 10, 2 ** 3);
// 2 ** 3 means 2 to power of 3 = 2 * 2 * 2

const firstName = "Amir";
const lastName = "Rezaee";
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x++;     // x = x + 1 = 101
x--;     // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageAmir > ageMobina); // >, <, >=, <=
console.log(ageMobina >= 18);
const ifFullAge = ageMobina >= 18;
console.log(ifFullAge);
console.log(now - 2007 > now - 206);