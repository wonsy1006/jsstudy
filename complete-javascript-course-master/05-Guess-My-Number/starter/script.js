'use strict';

/* // ------------- PROJECT #1: Guess My Number!

// console.log(document.querySelector('.message').textContent);
*/

/* // ------------- What's the DOM and DOM Manipulation
// DOM(DOCUMENT OBJECT MODEL) : Structured representation of html documents. Allows javascript to access HTML elements and styles to manipulate them.

// DOM !== JAVASCRIPT
// DOM is included in WEB APIs and can interact with javascript
*/

/* // ------------- Selecting and Manipulating Elements
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// ------------- Handling Click Events

// ------------- Implementing the Game Logic

const number = document.querySelector('.number');
const guess = document.querySelector('guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');

const displayMessage = m => {
  message.textContent = m;
};

// not implemented until is called
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').value = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No Number!';
    displayMessage('🛑 No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // ------------- Implementing Highscores

    if (score > highScore.textContent) {
      highScore.textContent = score;
    }

    // ------------- Manipulating Css Styles

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = 30 + 'rem';

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      // score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

////////////////////////////////////////
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color (#222) and number width (15rem)

const again = document.querySelector('.again');

const resetGame = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.number').value = secretNumber;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  // CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = 15 + 'rem';
};

again.addEventListener('click', resetGame);

// ------------- Refactoring Our Code: The DRY Principle

// ------------- PROJECT #2: Modal Window

// ------------- Working With Classes

// ------------- Handling an "Esc" Keypress Event

// ------------- PROJECT #3: Pig Game

// ------------- Rolling the dice

// ------------- Switching the Active Player

// ------------- Holding Current Score

// ------------- Resetting the Game
