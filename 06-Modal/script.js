'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

console.log(btnCloseModel);

for (let i = 0; i < btnOpenModel; i++) {
  console.log(btnOpenModel[i].textContent);
}
