// const corolla = {
//   color: "blue",
//   brand: "Toyota",
//   price: 10000,
//   drive: function () {
//     console.log(`"The ${this.color} car goes VROOOOoooom"`);
//   },
// };

// const accord = {
//   color: "red",
//   brand: "Honda",
//   price: 11000,
//   drive: function () {
//     console.log(`"The ${this.color} car goes VROOOOoooom"`);
//   },
// };

// const sonata = new Object();
// sonata["color"] = "black";
// sonata["brand"] = "Hyundai";
// sonata["price"] = 81000;
// sonata["drive"] = function () {
//   console.log(`"The ${this.color} car goes VROOOOoooom"`);
// };

// const sentra = new Object();
// sentra["color"] = "white";
// sentra["brand"] = "Nissan";
// sentra["price"] = 11000;
// sentra["drive"] = function () {
//   console.log(`"The ${this.color} car goes VROOOOoooom"`);
// };


// function changeColor(newColor, car) {
//   car['color'] = newColor;
// };

// changeColor("green", corolla);
// changeColor("black", accord);
// changeColor("violet", sonata);
// changeColor("orange", sentra);

// const cars = [corolla, accord, sonata, sentra];

// for (let car of cars) {
//   car.drive();
// }


// function Cars(color, brand, price) {
//   this.color = color;
//   this.brand = brand;
//   this.price = price;
//   this.drive = function () {
//     console.log(`"The ${this.color} car goes VROOOOoooom"`);
//   };
// }

// const car1 = new Cars("blue", "toyota", 20000);
// console.log(car1);
// car1.drive();


//Q2


function Dice(die1, die2) {
  this.currentTotal = 0;
  this.doublesCount = 0;
  this.allDice = [die1, die2];

  this.average = function () {
    return (this.allDice[0].average() + this.allDice[1].average()) / 2;
  }

  this.roll = function () {
    const die1 = this.allDice[0].roll();
    const die2 = this.allDice[1].roll();

    if (die2 === die1) {
      this.doublesCount++;
    }

    this.currentTotal = die1 + die2;
    return this.currentTotal;
  }
}

function Die(sides) {
  this.sides = sides;
  this.rolls = [];
  this.value = 0;

  this.roll = function () {
    let oneRoll = random(1, this.sides);
    this.rolls.push(oneRoll);
    this.value = oneRoll;
    return oneRoll;
  }

  this.average = function () {
    return this.rolls.reduce((total, num) => total + num) / this.rolls.length;
  }
}

function random(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

const dieA = new Die(6);
const dieB = new Die(6);
const dice = new Dice(dieA, dieB);

console.log(dice.roll());
console.log(dice.roll());
console.log(dice.roll());
console.log(dice.roll());
console.log(dice.doublesCount);
console.log(dice.allDice);
console.log(dice.average());

// //Q 3 

// function HockeyTracker() {



// }


// const tracker = new HockeyTracker();

// tracker.add([["Winnipeg", 3], ["Edmonton", 0]])

// console.log(tracker.getGoalsFor("Winnipeg")); // 3
// console.log(tracker.getPoints("Winnipeg")); // 2
// console.log(tracker.getPoints("Edmonton")); // 0
// console.log(tracker.getGoalDifference("Edmonton")); // -3

// tracker.add([["Winnipeg", 1], ["Edmonton", 1]]);

// console.log(tracker.getGoalsFor("Winnipeg")); // 4
// console.log(tracker.getPoints("Winnipeg")); // 4
// console.log(tracker.getPoints("Edmonton")); // 1
// console.log(tracker.getGoalsAgainst("Winnipeg")); // 1

// console.log(tracker.getPoints("New York")); // 0
