'use strict';
let guessNumber = '';
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    document.querySelector('.message').textContent = '😑 No Number!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (secretNumber > guessNumber) {
    document.querySelector('.message').textContent = '😣 Too Low!';
    score--;
    if (score < 1) {
      document.querySelector('.message').textContent = '😒 You Lost!';
    }
    document.querySelector('.score').textContent = score;
  } else if (secretNumber < guessNumber) {
    document.querySelector('.message').textContent = '🙄 Too High!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = '😒 You Lost!';
    }
  } else if (secretNumber === guessNumber) {
    document.querySelector('.message').textContent = '😉 You Won!';
    highscore = score;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guessNumber;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';
});
