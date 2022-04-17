'use strict';
let sc = 20;

const game = function () {
  let guess = Number(document.querySelector('.guess').value);
  if (guess === rndNum) {
    message.textContent = '✅ correct';
    document.body.style.backgroundColor = 'darkgreen';
  } else if (guess > rndNum) {
    message.textContent = '📈 high';
    sc--;
    score.textContent = sc;
  } else if (guess < rndNum) {
    message.textContent = '📉 low';
    sc--;
    score.textContent = sc;
  }
  if (sc === 0) {
    guessButton.disabled = true;
  }
};

const enter = function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    game();
  }
};

let rndNum = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let guessButton = document.querySelector('.check');
let againButton = document.querySelector('.again');
const score = document.querySelector('.score');
let numbers = document.querySelector('.number');

guessButton.addEventListener('click', game);

guessButton.addEventListener('keyup', enter);

againButton.addEventListener('click', function () {
  rndNum = Math.trunc(Math.random() * 21) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = 0;
  score.textContent = String(20);
  sc = 20;
  guessButton.disabled = false;
  document.body.style.backgroundColor = '#222222';
});
