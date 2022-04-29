import {rnd} from './functions';

'use strict';

//vars
let rndNum = 0;
let sc = 0;

//players
const p0 = document.querySelector('.player--0');
const p1 = document.querySelector('.player--1');

//scores
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const curr0 = document.querySelector('#current--0');
const curr1 = document.querySelector('#current--1');

//dice
const dice = document.querySelector('.dice');

//btns
const rollBtn = document.querySelector('.btn--roll');

//initialize
dice.classList.add('hidden');
document.querySelector('.score').textContent = 0;

rollBtn.addEventListener('click', function () {
    rndNum = rnd();
    score += rndNum;

    dice.classList.remove('hidden');
    dice.src = `dice-${rndNum}.png`;

})

