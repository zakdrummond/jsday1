'use strict'
function beyond(num) {
  if (num === Infinity) {
    return 'And beyond';
  } 
  else if (num > 0 && num < Infinity) {
    return 'To infinity';
  }
  else if (num < 0 && num > -Infinity) {
    return 'To negative infinity';
  }
  else {
    return 'Staying home';
  }
}

console.log(beyond(0));
