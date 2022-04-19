'use strict';
let sc = 20;
let hsc = 0;

let rndNum = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let guessButton = document.querySelector('.check');
let againButton = document.querySelector('.again');
const score = document.querySelector('.score');
let numbers = document.querySelector('.number');
let highscore = document.querySelector('.highscore');

const game = function () {
  let guess = Number(document.querySelector('.guess').value);
  if (guess === rndNum) {
    changeMessage('✅ correct');
    numbers.style.width = '30rem';
    document.body.style.backgroundColor = 'darkgreen';
    numbers.innerHTML = rndNum;
    if (sc > hsc) {
      highscore.textContent = sc;
      hsc = sc;
    }
  } else if (guess > rndNum) {
    changeMessage('📈 high');
    sc--;
    score.textContent = sc;
  } else if (guess < rndNum) {
   changeMessage('📉 low');
    sc--;
    score.textContent = sc;
  }
  if (sc === 0) {
    guessButton.disabled = true;
    document.body.style.backgroundColor = "darkred";
  }
};

const enter = function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    game();
  }
};

const changeMessage = function (text) {
  message.textContent = text;
}



guessButton.addEventListener('click', game);

guessButton.addEventListener('keyup', enter);

againButton.addEventListener('click', function () {
  rndNum = Math.trunc(Math.random() * 20) + 1;
  changeMessage('Start guessing...');
  document.querySelector('.guess').value = 0;
  score.textContent = String(20);
  sc = 20;
  guessButton.disabled = false;
  numbers.style.width = '15rem';
  document.body.style.backgroundColor = '#222222';
  numbers.innerHTML = "?";
});
