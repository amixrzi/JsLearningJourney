// Logical Operators
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

// if (hasDriverLicense && hasGoodVision){
//     console.log('Makima has able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);
if (hasDriverLicense && hasGoodVision && !isTired){
    console.log('Makima has able to drive!')
} else {
    console.log('Someone else should drive...')
}