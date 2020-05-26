const allCells = document.getElementsByTagName('td');
const tbody = document.querySelector('tbody');
const button = document.getElementById('reset');
const usedNumbers = [];
const limits = {
  b: {lower: 1, upper: 15},
  i: {lower: 16, upper: 30},
  n: {lower: 31, upper: 45},
  g: {lower: 46, upper: 60},
  o: {lower: 61, upper: 75},
};

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function generateUniqueNumber(lower, upper) {
  let number;

  do {
    number = getRandomInt(lower, upper);
  } while (usedNumbers.includes(number));

  usedNumbers.push(number);
  return number;
}

function reset() {
  for (let cell of allCells) {
    if (cell.classList.contains("b-column")) {
      cell.classList.remove('dab');
      cell.textContent = generateUniqueNumber(limits.b.lower, limits.b.upper);
    } else if (cell.classList.contains("i-column")) {
      cell.classList.remove('dab');
      cell.textContent = generateUniqueNumber(limits.i.lower, limits.i.upper);
    } else if (cell.classList.contains("n-column")) {
      cell.classList.remove('dab');
      cell.textContent = generateUniqueNumber(limits.n.lower, limits.n.upper);
    } else if (cell.classList.contains("g-column")) {
      cell.classList.remove('dab');
      cell.textContent = generateUniqueNumber(limits.g.lower, limits.g.upper);
    } else if (cell.classList.contains("o-column")) {
      cell.classList.remove('dab');
      cell.textContent = generateUniqueNumber(limits.o.lower, limits.o.upper);
    }
  }
}

tbody.addEventListener('click', function(event) {
  if (event.target.nodeName === "TD") {
    event.target.classList.add('dab');
  }
});

button.onclick = reset;

reset();






function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function reset() {
  const cells = document.querySelectorAll("td:not(.freespace)");

  const bingoNumbers = {
    "b-column": {lower: 1, upper: 15},
    "i-column": {lower: 16, upper: 30},
    "n-column": {lower: 31, upper: 45},
    "g-column": {lower: 46, upper: 60},
    "o-column": {lower: 61, upper: 75},
  };

  for(let cell of cells) {
      const usedNumbers = [];
      let randomNumber;
      cell.classList.remove('dab');

      do {
        randomNumber = getRandomInt(bingoNumbers[cell.className].lower, bingoNumbers[cell.className].upper);
      } while (usedNumbers.includes(randomNumber));

      usedNumbers.push(randomNumber);
      cell.textContent = randomNumber;
  }
}

document.querySelector('tbody').addEventListener('click', function (e) {
  if (e.target.nodeName === "TD") {
    e.target.classList.add('dab');
  }  
});

document.querySelector('#reset').addEventListener('click', reset);

reset();