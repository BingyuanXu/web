console.log(`I'm thinking of a number between 1 and 100!`);
let guessTime = 1;
let userNum;
const randomNum = getRandomInt(1, 100);
let allowedguesses = 7;

do {
  userNum = getposNum();
  console.log(`You guessed ${userNum}.`);

  if (guessTime === 7 && randomNum !== userNum) {
    console.log(`The secret number was ${randomNum}.\nYou didn't guess the number.`);
  } else if (randomNum === userNum) {
    console.log(`You got it! \nThe secret number was ${userNum}\nIt only took you ${guessTime} ${pluralize('guess', 7 - guessTime)}.`);
  } else if (userNum < randomNum) {
    console.log(`${userNum} is too low. Guess again, you have ${7 - guessTime} ${pluralize('guess', 7 - guessTime)} remaining.`);
  } else {
    console.log(`${userNum} is too high. Guess again, you have ${7 - guessTime} ${pluralize('guess', 7 - guessTime)} remaining.`);
  }

  guessTime++;
} while (userNum !== randomNum && guessTime <= 7);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getposNum() {
  let posNum = parseInt(prompt("enter a number", ""));

  while (Number(posNum) <= 0 || parseInt(posNum) !== parseFloat(posNum) || ((!Number(posNum) && Number(posNum)) != 0)) {
    posNum = parseInt(prompt('enter a right number !!!!!!!!!!!'));
  }

  return posNum;
}