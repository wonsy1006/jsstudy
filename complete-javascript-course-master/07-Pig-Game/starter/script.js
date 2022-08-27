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

let scores, currentScore, activePlayer, playing;

const resetGame = () => {
  // Starting conditions
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  players[0].classList.add('player--active');
  players[0].classList.remove('player--winner');
  players[1].classList.remove('player--active');
  players[1].classList.remove('player--winner');
  scoreEls[0].textContent = 0;
  scoreEls[1].textContent = 0;
  currentEls[0].textContent = 0;
  currentEls[1].textContent = 0;
};

resetGame();

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  players[0].classList.toggle('player--active');
  players[1].classList.toggle('player--active');
};

/** 주사위를 던져 주사위 이미지를 출력하는 함수 */
const rollDice = () => {
  if (playing) {
    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      console.log(currentScore);
    } else {
      switchPlayer();
    }
  }
};

/** 현재 점수를 총 점수에 합산 */
const holdScore = () => {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      // Finish game
      console.log(players[activePlayer]);
      players[activePlayer].classList.add('player--winner');
      players[activePlayer].classList.remove('player--active');
      diceEl.style.display = 'none';
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
};

// Rolling dice
btnRoll.addEventListener('click', rollDice);

// Hold score
btnHold.addEventListener('click', holdScore);

// Reset Game
btnNew.addEventListener('click', resetGame);
