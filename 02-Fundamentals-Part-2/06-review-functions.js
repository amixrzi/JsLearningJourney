// Reviewing Functions
'use strict'

const calcAge = function (brithYear) {
    return 2026 - brithYear;
}

const yearsUntilRetirement = function (brithYear, firstName) {
    const age = calcAge(brithYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired⭐`);
        return -1;
    }
}

console.log(yearsUntilRetirement('2007', 'Amir'));
console.log(yearsUntilRetirement('1996', 'Nima'));