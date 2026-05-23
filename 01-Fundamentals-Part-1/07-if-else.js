// If / else Statement
const age = 17;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. waite another ${yearsLeft} year :)`);
}

const brithYear = 2006;
let century;
if (brithYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
