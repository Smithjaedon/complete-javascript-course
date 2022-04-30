'use strict';

//initialize


//vars
let rnd = 0;
let sc = [0,0];
let acitveP = 0;
let cSc = 0;
//players
let p = document.querySelector(`.player--${acitveP}`);
let p0 = document.querySelector(`.player--0`);
let p1 = document.querySelector(`.player--1`);
let currentP = document.querySelector('.player--active');
//scores
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
let score = document.querySelector(`#score--${acitveP}`).textContent;
let current = document.querySelector(`#current--${acitveP}`);
let curr0 = document.querySelector('#current--0').textContent;
let curr1 = document.querySelector('#current--1').textContent;
//dice
const dice = document.querySelector('.dice');

const init = function () {
   sc = [0, 0];
   cSc = 0;
   acitveP = 0;

   score0.textContent = 0;
   score1.textContent = 0;
   curr0 = 0;
   curr1 = 0;

   dice.classList.add('hidden');
   p0.classList.remove('player--winner');
   p1.classList.remove('player--winner');
   p0.classList.add('player--active');
   p1.classList.remove('player--active');
};

init();

//btns
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');

rollBtn.addEventListener('click', function () {


   rnd = Math.trunc(Math.random()*6)+1;

   dice.classList.remove('hidden');
   dice.src = `dice-${rnd}.png`;

   if (rnd !== 1) {
      cSc += rnd;
      document.querySelector(`#current--${acitveP}`).textContent = cSc;
   } else {
      cSc = 0;
      document.querySelector(`#current--${acitveP}`).textContent = cSc;
      acitveP = acitveP === 0 ? 1: 0;
      p0.classList.toggle('player--active');
      p1.classList.toggle('player--active');
   }
});

holdBtn.addEventListener('click', function () {
   sc[acitveP]+= cSc;
   document.querySelector(`#score--${acitveP}`).textContent = String(sc[acitveP]);
   cSc = 0;
   document.querySelector(`#current--${acitveP}`).textContent = cSc;
   if (sc[acitveP] >=100)
      p.classList.add('player--winner');
   acitveP = acitveP === 0 ? 1: 0;
   p0.classList.toggle('player--active');
   p1.classList.toggle('player--active');
});

newBtn.addEventListener('click', init);
