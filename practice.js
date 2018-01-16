'use strict';
function yearOfBirth(age) {
  try {
    if (age < 0) {
      throw new Error('age must be a positive number');
    }
    return 2018 - age;
  } 
  catch (e) {
    console.log(e);
  }
  
}

function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  if (yob === undefined) {
    return 'please enter your true age';
  }
  if (typeof name !== 'string' || typeof age !== 'number') {
    return 'please enter valid arguments';
  }
  return `My name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

console.log(whoAmI('Zak', 33));
yearOfBirth(33);
