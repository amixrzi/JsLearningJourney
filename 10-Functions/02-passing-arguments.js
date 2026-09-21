'use strict';

const flight = 'MA432';
const amir = {
  name: 'Amirhossein Rezaei',
  passport: 20750256,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'MA769';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 20750256) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, amir);
// console.log(flight);
// console.log(amir);
//
// // Is same as doing...
// const flightNum = flight;
// const passenger = amir;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(amir);
checkIn(flight, amir);
