let round = 0;
let total = 0;
let round1 = 0;
let total1 = 0;
let dice1 = 0;
let round2 = 0;
let total2 = 0;
let dice2 = 0;
let switchPlayer = true;
const rollButton = document.querySelector(`.btn-roll`);
const dice1Img = document.querySelector(`#dice1`);
const dice2Img = document.querySelector(`#dice2`);
const round1Num = document.querySelector(`#current-0`);
const round2Num = document.querySelector(`#current-1`);
const holdButton = document.querySelector(`.btn-hold`);
const totalNum1 = document.querySelector(`#score-0`);
const totalNum2 = document.querySelector(`#score-1`);
const panelStyle1 = document.querySelector(`.player-0-panel`);
const panelStyle2 = document.querySelector(`.player-1-panel`);
const newButton = document.querySelector(`.btn-new`);

rollButton.addEventListener(`click`, function () {
  let dice = rollDice();
  dice1Img.src = `dice-${dice[0]}.png`;
  dice2Img.src = `dice-${dice[1]}.png`;
  round += dice[0] + dice[1];
  roundDisplay();
  rollOne(dice);
  return dice;
});

holdButton.addEventListener(`click`, function () {
  total += round;
  panelStyle2.classList.remove(`active`);
  panelStyle1.classList.remove(`active`);

  if (switchPlayer) {
    totalNum1.textContent = total1 + total + parseInt(totalNum1.textContent);
    panelStyle2.classList.add(`active`);
    if (parseInt(totalNum1.textContent) >= 100) {
      winner();
      newGame();
    }
  } else {
    totalNum2.textContent = total2 + total + parseInt(totalNum2.textContent);
    panelStyle1.classList.add(`active`);
    if (parseInt(totalNum2.textContent) >= 100) {
      winner();
      newGame();
    }
  }

  switchPlayer = !switchPlayer;
  round = 0;
  total = 0;
  round1Num.textContent = 0;
  round2Num.textContent = 0;
  dice1Img.src = `dice-1.png`;
  dice2Img.src = `dice-1.png`;
})

newButton.addEventListener(`click`, newGame);

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function rollDice() {
  return [getRandomInt(1, 6), getRandomInt(1, 6)];
}

function rollOne(a) {
  if (a.includes(1)) {
    panelStyle2.classList.remove(`active`);
    panelStyle1.classList.remove(`active`);
    if (switchPlayer) {
      panelStyle2.classList.add(`active`);
    } else {
      panelStyle1.classList.add(`active`);
    }
    switchPlayer = !switchPlayer;
    round = 0;
    total = 0;
    round1Num.textContent = 0;
    round2Num.textContent = 0;
    alert(`next one`);
  }
}

function winner() {
  if (switchPlayer) {
    alert(`play 1 win the game!`);
  } else {
    alert(`play 2 win the game!`);
  }
}

function roundDisplay() {
  if (switchPlayer) {
    round1Num.textContent = round;
  } else {
    round2Num.textContent = round;
  }
}

function newGame() {
  round = 0;
  total = 0;
  round1 = 0;
  total1 = 0;
  dice1 = 0;
  total2 = 0;
  dice2 = 0;
  switchPlayer = true;
  round1Num.textContent = 0;
  round2Num.textContent = 0;
  dice1Img.src = `dice-1.png`;
  dice2Img.src = `dice-1.png`;
  panelStyle2.classList.remove(`active`);
  panelStyle1.classList.remove(`active`);
  panelStyle1.classList.add(`active`);
  totalNum1.textContent = 0;
  totalNum2.textContent = 0;
}