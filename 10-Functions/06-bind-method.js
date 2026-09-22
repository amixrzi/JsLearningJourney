'use strict';
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  booking: [],
};

// Bind method
// book.call(euroWings, 23, 'Sara Williams');
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(67, 'Tony Stark');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Amirhossein Rezaei');
bookEW23('Patrik Jane');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.byPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.byPlane.bind(lufthansa));

// Partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 300));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(867));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.23);
console.log(addVAT2(110));
