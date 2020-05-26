const table = document.querySelector(`table`);
const resetButton = document.querySelector(`#reset`);
const bColumn = document.querySelectorAll(`.b-column`);
const iColumn = document.querySelectorAll(`.i-column`);
const nColumn = document.querySelectorAll(`.n-column`);
const gColumn = document.querySelectorAll(`.g-column`);
const oColumn = document.querySelectorAll(`.o-column`);

let array = [];

table.addEventListener(`click`, function (event) {
  if (event.target.nodeName === `TD`) {
    event.target.classList.toggle("dab");
  }
});

resetButton.addEventListener(`click`, function () {
  randomNum(1, 15, `b`);
  randomNum(16, 30, `i`);
  randomNum(31, 45, `n`);
  randomNum(46, 60, `g`);
  randomNum(61, 75, `o`);
});

function arrayNum(min, max) {
  for (let x = 0; x < 5; x++) {
    array[x] = getRandomInt(min, max);
    for (let y = 0; y < x; y++) {
      while (array[x] === array[y]) {
        array[x] = getRandomInt(min, max);
      }
    }
  }
  return array;
}

function randomNum(min, max, columnWord) {
  let random = arrayNum(min, max);
  for (let x = 0; x < eval(`${columnWord}Column`).length; x++) {
    eval(`${columnWord}Column`)[x].textContent = random[x];
  }
}

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}


