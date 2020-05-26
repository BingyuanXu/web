// const car1 = {
//   color: "red",
//   brand: "BMW",
//   price: "$50000",
//   drive: function() { 
//     console.log(`The ${this.color} car goes VROOOOoooom`);
//   },
// };

// const car2 = {
//   color: "blue",
//   brand: "Toyota",
//   price: "$10000",
//   drive: function() { 
//     console.log(`The ${this.color} car goes VROOOOoooom`);
//   },
// };

// const car3 = new Object();
// car3.color = "brown";
// car3.brand = "Ford";
// car3.price = "$20000";
// car3.drive = function() { 
//   console.log(`The ${this.color} car goes VROOOOoooom`);
// };


// const car4 = new Object();
// car4.color = "yelleow";
// car4.brand = "Jeep";
// car4.price = "$30000";
// car4.drive = function() { 
//   console.log(`The ${this.color} car goes VROOOOoooom`);
// };


// function changeColor(color, carObj) {
//   carObj.color = color;
// }

// changeColor("gole", car4);
// car4.drive();

// const cars = [car1, car2, car3, car4];

// for (car of cars) {
//   car.drive();
// }

// q1

function randomRange(min, max) {  
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

function getSum(total, num) {
    return total + num;
}

const die1 = {
  sides: 6,
  rolls: [],
  value: 0,
  roll: function () {
    this.value = randomRange(1, this.sides)
    this.rolls.push(this.value)
  },
  average : function () {
    return this.rolls.reduce(getSum) / this.rolls.length;
  },
}

const die2 = {
  sides: 6,
  rolls: [],
  value: 0,
  roll: function () {
    this.value = randomRange(1, this.sides)
    this.rolls.push(this.value)
  },
  average : function () {
    return this.rolls.reduce(getSum) / this.rolls.length;
  },
}

const dice = {
  currentToatal: 0,
  doublesCount: 0,
  allDice: [die1, die2],

  roll: function () {
    this.allDice[0].roll();
    this.allDice[1].roll();

    this.currentToatal = this.allDice[0].value + this.allDice[1].value;

    if (this.allDice[0].value === this.allDice[1].value) {
      this.doublesCount++;
    }
  },

  average: function () {
    return ((this.allDice[0].average() + this.allDice[1].average()) / 2).toFixed(2);
  },
}





dice.roll();



console.log(die1.value);

console.log(die2.value);

console.log(dice.currentToatal);
console.log(dice.doublesCount);
console.log(dice.average());


const a = {
  1: "a",
  2: [1, 2, 3, 4],
  3: { 10: "a", 11: "b" },
  4: 5.5,
  5: function () {
    console.log("yes");
  },
  abc: function () {
    this["1"] = "b";
  }
}

console.log(a["1"]);
console.log(a["2"]);
console.log(a["3"]);
console.log(a["4"]);
console.log(a["5"]());
console.log(a.abc());
console.log(a["1"]);


function colon(a) {
const b = new Object();
let array = Object.entries(a);

array.map(function(ele,index) {


})

}

function colon(a) {
  const b = {};
  const keys = Object.keys(a);
  const value = Object.values(a);
  for (let x = 0; x < keys.length; x++) {
    b[keys[x]] = value[x];
  }

  return b;

}


// console.log(colon(a));

//q3

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

function q3() {
  let newObj = {};
  newObj.next = {};
  newObj.prev = {};
  if (newObj.data === undefined) {
    newObj.data = randomRange(1, 10);
  }

  newObj.setNext = function () {
    newObj.next = Object.assign({}, colon(newObj));
    newObj.prev = Object.assign({}, colon(newObj.next));
    newObj = Object.assign({}, colon(newObj.prev));
    return newObj;
  };

  newObj.setPrev = function () {
    newObj.prev = Object.assign({}, colon(newObj));
    newObj.next = Object.assign({}, colon(newObj.prev));
    newObj = Object.assign({}, colon(newObj.next));
    return newObj;
  };
}


const a = q3();
const b = a.setNext();
const c = a.setPrev();
const d = a.setNext();
const e = a.setPrev();
console.log(b, c, d, e);

// let a = q3();

// console.log(a.setNext(), a.setPrev());



let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(this.name); // leads to an error
  }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!




function colon(a) {
  const b = {};
  const keys = Object.keys(a);
  const value = Object.values(a);
  for (let x = 0; x < keys.length; x++) {
    b[keys[x]] = value[x];
  }

  return b;

}



let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( this.name ); // leads to an error
  }

};

let admin = user;
user = null;
console.log(user) // null
console.log(admin) // { name: 'John', age: 30, sayHi: [Function: sayHi] }