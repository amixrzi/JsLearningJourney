'use strict';

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 12;
})();
// console.log(isPrivate);

(() => console.log('This will Also never run again'))();

{
  const isPrivate = 12;
  var notPrivate = 32;
}
// console.log(isPrivate);
console.log(notPrivate);
