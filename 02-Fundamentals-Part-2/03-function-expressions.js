// Function Declarations vs. Expressions
'use strict'

// Function declaration
function calcAge1(birthYear) {
    return 2026 - birthYear;
}
const age1 = calcAge1(2007);

// Function expression
const calcAge2 = function (birthYear) {
    return 2026 - birthYear;
}
const age2 = calcAge2(2007);

console.log(age1, age2);