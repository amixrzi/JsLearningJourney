'use strict';

const future = new Date(2029, 8, 2, 23, 22);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

const days = calcDaysPassed(new Date(2029, 8, 2), new Date());
console.log(days);
