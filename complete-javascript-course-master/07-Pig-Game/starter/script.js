'use strict';
// Selecting elements
const players = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

const scoreEls = [
  document.querySelector('#score--0'),
  document.querySelector('#score--1'),
];

const currentEls = [
  document.querySelector('#current--0'),
  document.querySelector('#current--1'),
];

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
scoreEls[0].textContent = 0;
scoreEls[1].textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

/** 주사위를 던져 주사위 이미지를 출력하는 함수 */
const rollDice = () => {
  // 1. Generating a random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice === 1) {
    activePlayer = activePlayer === 0 ? 1 : 0;
    players[1].classList.add('player--active');
    players[0].classList.remove('player--active');
  } else {
    // Add dice to current score
    currentScore += dice;
    document.querySelector(`current-${activePlayer}`).textContent =
      currentScore;
    currentEls[0].textContent = currentScore; // change later
  }
};

// Rolling dice
btnRoll.addEventListener('click', rollDice);
