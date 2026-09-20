'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 150 * numPassenger,
) {
  // ES5
  // numPassenger = numPassenger || 1;
  // price = price || 150;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LA231');
createBooking('LA231', 3, 300);
createBooking('TH537', 7);
createBooking('TH537', 10);
createBooking('MA051', undefined, 100);
