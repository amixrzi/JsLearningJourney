'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 20;

console.log((document.querySelector('.guess').value = 32));
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (massage) {
  document.querySelector('.message').textContent = massage;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is ni input
  if (!guess) {
    displayMessage('⛔⛔ pls enter a number');
    // when player win
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is too wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!😒');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
