'use strict';

// const x = 23;
//
// const calcAge = brithYear => 2026 - 2007;

///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([1, 5, 7], [12, 4, 3]);
// console.log(amplitudeNew);

///////////////////////////////////////
// Debugging with Console and Breakpoints

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//
//     // C) FIX
//     // value: Number(prompt('Developer Celsius')),
//     value: 10,
//   };
//
//   // B) FIND
//   console.table(measurement);
//   // console.log(measurement);
//   // console.warn(measurement);
//   // console.error(measurement);
//
//   const kelvin = measurement.value + 10;
//   return kelvin;
// };
// console.log(measureKelvin());
//
// // Using a Debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = 0;
//   let min = 0;
//
//   for (let i = 1; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeBug([1, 5, 7], [12, 4, 3]);
// // A) IDENTIFY
// console.log(amplitudeNew);

///////////////////////////////////////
// Coding Challenge #1

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
//
// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 1; i < arr.length; i++) {
//     str += `${arr[i - 1]}ºC ins ${i} days ... `;
//   }
//   console.log('...', str);
// };
// printForecast(data1);
// printForecast(data2);

///////////////////////////////////////
// Coding Challenge #2 With AI

function analyzeWorkWeek(hours) {
  if (!Array.isArray(hours) || hours.length !== 7) {
    throw new Error(
      'Input must be an array containing exactly 7 daily work hours.',
    );
  }

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const totalHours = hours.reduce((sum, day) => sum + day, 0);
  const averageHours = Number((totalHours / hours.length).toFixed(1));
  const busiestDay = days[hours.indexOf(Math.max(...hours))];
  const daysWorked = hours.filter(day => day > 0).length;
  const fullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    busiestDay,
    daysWorked,
    fullTime,
  };
}

// Example
console.log(analyzeWorkWeek([8, 7.5, 8, 6, 5, 10, 9]));
