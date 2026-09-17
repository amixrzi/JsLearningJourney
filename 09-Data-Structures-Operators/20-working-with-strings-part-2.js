'use strict';

const airLine = 'Tap Air Portugal';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalization in name
// const passenger = 'mObInA';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
const fixCapitalization = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};
fixCapitalization('mObInA');

// Comparing email
const email = 'amixrzi@gmail.com';
const loginEmail = '    AmiXrzI@Gmail.Com \n';
// const lowerEmail1 = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail1.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = '298,28£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to Boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

// Practice exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome to aboard');
  }
};

checkBaggage('I have a Laptop, some Foods and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snake and a gun for protection');
