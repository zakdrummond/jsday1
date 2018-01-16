'use strict';
function daysInMonth(month) {
  let days;
  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    days = 31;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    days = 30;
    break;
  case 'February':
    days = 28;
    break;
  }
  if (month === 'February') {
    return `${month} has ${days} days, except in a leap year`;
  }  else {
    return `${month} has ${days} days`;
  }
}

console.log(daysInMonth('February'));