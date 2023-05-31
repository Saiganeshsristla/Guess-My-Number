'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (target, message) {
  document.querySelector(target).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No inputs
  if (!guess) {
    displayMessage('.message', 'Please Enter a number🙏');
  }

  //Correct guess
  else if (guess === secretnumber) {
    displayMessage('.message', 'Correct number👍');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    highscore = score > highscore ? score : highscore;
    displayMessage('.highscore', highscore);
  }

  //Guess number is wrong
  else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretnumber ? 'Too high!' : 'Too low!';
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('You lost the game');
      displayMessage('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('.score', score);
  displayMessage('.message', 'Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('.number', '?');
  document.querySelector('.guess').value = ' ';
});
