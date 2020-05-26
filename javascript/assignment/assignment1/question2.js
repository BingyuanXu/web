const sides = getposNum();
let dice1;
let dice2;
let rollTimes = 0;
let doubles = 0;
let totalDice1 = 0;
let totalDice2 = 0;
console.log(`Thanks! Here we go ...\n\n`);

do {
  dice1 = getRandomInt(1, sides);
  dice2 = getRandomInt(1, sides);
  console.log(`${rollTimes + 1}. die number 1 is ${dice1} and die number 2 is ${dice2}.`);

  if (dice1 === dice2) {
    doubles++;
  }

  rollTimes++;
  totalDice1 += dice1;
  totalDice2 += dice2;
} while (dice1 !== 1 || dice2 !== 1);

console.log(`\nYou got snake eyes! Finally! On try number ${rollTimes}!`);
console.log(`Along the way you rolled doubles ${doubles} ${pluralize('time', doubles)}`);
console.log(`The average roll for die #1 was ${(totalDice1 / rollTimes).toFixed(2)}`);
console.log(`The average roll for die #2 was ${(totalDice2 / rollTimes).toFixed(2)}`);

function getposNum() {
  let posNum = parseInt(prompt(`How many sides on your dice?`, ``));

  while (Number(posNum) < 3 || parseInt(posNum) !== parseFloat(posNum) || ((!Number(posNum) && Number(posNum)) != 0)) {
    console.log(`Sorry, that's not a valid size value. Please choose a positive number.`);
    posNum = parseInt(prompt(`How many sides on your dice?`));
  }

  return posNum;
}

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}