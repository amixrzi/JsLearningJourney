'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 20;

console.log((document.querySelector('.guess').value = 32));
console.log(document.querySelector('.guess').value);
