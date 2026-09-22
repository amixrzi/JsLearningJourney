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
lufthansa.book(487, 'Amir');
lufthansa.book(345, 'Mamad');
console.log(lufthansa);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
// Dos not work
// book(23, 'Sara Williams');

// Call method
book.call(euroWings, 23, 'Sara Williams');
console.log(euroWings.booking);

book.call(lufthansa, 325, 'Patrik Jane');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  booking: [],
};
book.call(swiss, 98, 'Patrik Jane');
console.log(swiss);

// Apply method
const flightData = [666, 'Red John'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
