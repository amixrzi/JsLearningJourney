'use strict';

const secureBooking = function () {
  let passengersCount = 0;
  return function () {
    passengersCount++;
    console.log(`${passengersCount} Passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
