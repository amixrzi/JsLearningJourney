'use strict';

const num = 82673621.85;

const options = {
  style: 'currency',
  unicode: 'celsius',
  currency: 'USD',
  // useGrouping: false,
};

console.log('Us:     ', new Intl.NumberFormat('en-US', options).format(num));
console.log('IR:     ', new Intl.NumberFormat('fa-IR', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
