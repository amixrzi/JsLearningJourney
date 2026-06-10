// Arrow Functions
'use strict'

const calcAge = brithYear => 2026 - brithYear;
const age = calcAge(2007);
console.log(age);

const yearsUntilRetirement = (brithYear, firstName) => {
    const age2 = 2026 - brithYear;
    const retirement = 65 - age2;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2007, 'Amir'));
console.log(yearsUntilRetirement(2006, 'Mobina'));