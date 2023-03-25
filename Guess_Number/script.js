'use-strict';

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function(message) {
//     message = document.querySelector('.message').textContent
// }
// document.querySelector('.message').textContent = 'Correct number'
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 15
// document.querySelector('.guess').value = 24
// console.log(document.querySelector('.guess').value)
// Math.random() <--produces random number between 0 and 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}
// document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when there is no input
  if (!guess) {
    displayMessage('No Number Submitted')
    // document.querySelector('.message').textContent = 'No Number Submitted';
  }
  //   When a player wins
  else if (guess === secretNumber) {
    if (score === 20) {
      score;
    } else {
      score++;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    displayMessage('🎉Correct number')
    // document.querySelector('.message').textContent = '🎉Correct number';
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
    if(score>highscore){
      highscore = score
      document.querySelector('.highscore').textContent=highscore;
    }
  } 
// when guess is wrong
  else if(guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess > secretNumber? '📈Your number is bigger':'📉Your number is smaller';
    
        displayMessage(guess > secretNumber? '📈Your number is bigger':'📉Your number is smaller')
    
      } else {
      // document.querySelector('.message').textContent = '🎇You lost the game';
      displayMessage('🎇You lost the game')
      document.querySelector('.score').textContent = 0;
    }
  }


  // //   when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent =
  //       '📈Your number is bigger';
  //   } else {
  //     document.querySelector('.message').textContent = '🎇Your lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //   when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent =
  //       '📉Your number is smaller';
  //   } else {
  //     document.querySelector('.message').textContent = '🎇Your lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#777';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
