'use strict';
const randomNum = Math.floor(Math.random() * 3) + 1;
function rps(choice) {
  if (choice === randomNum) {
    return 'That\'s a tie, shoot again!';
  } else if (choice === 1 && randomNum === 3) {
    return 'You win!';
  } else if (choice === 3 && randomNum === 2) {
    return 'You win!';
  } else if (choice === 2 && randomNum === 1) {
    return 'You win!';
  } else {
    return 'You lose, try again!';
  }
}

console.log(randomNum);
console.log(rps(1));