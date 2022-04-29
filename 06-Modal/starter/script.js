'use strict';

//variables
const btnsOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const esc = 27;

//functions
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const escape = function (e) {
    if (!modal.classList.contains('hidden') && e.which === 27)
        closeModal();
}


for (let i = 0; i < btnsOpen.length; i++)
{
    btnsOpen[i].addEventListener('click', openModal);
}

overlay.addEventListener('click', closeModal);

btnClose.addEventListener('click', closeModal);

document.addEventListener('keydown', escape);





