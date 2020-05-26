// function Video(title, uploader, seconds) {
//   this.title = title;
//   this.uploader = uploader;
//   this.seconds = seconds;
// } 

// Video.prototype.play = function () {
//   console.log("You played the video!");
// };


// Video.prototype.watch = function () {
//   console.log("You watched every cat video on the internet!");
// };

// Video.prototype.pause = function () {
//   console.log("You paused the video!");
// };


// // console.log(Object.getPrototypeOf(video));
// // console.log(video.__proto__);
// // console.log(Video.prototype.constructor);



// const video1 = new Video("a", "b", 10);
// Video.prototype = {};


// console.log(Object.getPrototypeOf(video1));
// console.log(video1.__proto__);
// console.log(Video.prototype);
// console.log(video1);


// Q1 

function randomArray(array) {
  const indexs = array.length;
  const numArray = [];
  let index;

  do {
    index = Math.floor(Math.random() * indexs);

    if (!numArray.includes(index)) {
      numArray.push(index);
    }
  } while (numArray.length !== indexs);

  return numArray.map(ele => array[ele]);
}








function Deck(cards) {
  this.cards = cards;
}

Deck.prototype.count = function () {
  console.log(`remaining cards in the deck are ${this.cards.length}`);
  return this.cards;
}

Deck.prototype.shuffle = function () {
  this.cards = randomArray(this.cards);
}

Deck.prototype.draw = function (n) {
  const array = [];
  for (let x = 0; x < n; x++) {
    array.push(this.cards.pop()); //splice 更好。因为直接返回被删除的数，组成数组
  }
  return array;
}

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
  this.faceCard = this.rank > 10;
}


Card.prototype.toString = function () {
  const rank = { 1: "ace", 11: "Jack", 12: "Queen", 13: "King" }[this.rank] || this.rank;

  //   if (this.rank === 1) {   //switch 好一点
  //     console.log(`Ace of ${this.suit}"`);
  //   } else if (this.rank === 13) {
  //     console.log(`King of ${this.suit}"`);
  //   } else if (this.rank === 12) {
  //     console.log(`Queen of ${this.suit}"`);
  //   } else if ((this.rank === 11))
  //     console.log(`Jack of ${this.suit}"`);
  // }
  console.log(`${rank} of ${this.suit}`);
}

Card.prototype.valueOf = function () {
  return this.rank;
}

function newGame() {
  const suits = ["clubs", "heats", "diamonds", "spades"];
  const aDeck = [];

  for (let x = 1; x <= 13; x++) {
    for (suit of suits) {
      aDeck.push(new Card(suit, x));
    }
  }

  return aDeck;
}




function Player(name) {
  this.name = name;
  this.hand = []; //push Card object
}

Player.prototype.score = function () {
  let total = 0;

  this.hand.forEach(element => {
    if (element.suit === "diamonds" || element.suit === "heats") {
      total += element.rank;
    } else {
      total -= element.rank;
    }
  });

  // console.log(` ${this.name}: ${total}`);
  return total;
}

function Game(players, deck) {
  this.players = players; //an array of players
  this.deck = deck; // new deck
}

Game.prototype.scoresToString = function () {
  let a = ``;
  this.players.forEach(element => {
    a += `${element.name}: ${element.score()}\n`
  });

  return a;
}

Game.prototype.play = function () {
  let highestScore = 0;     //可以用sort method 去给array排序，用score的差值
  let highestName = ``;

  this.deck.forEach((element, index) => {
    let inHand = this.players[index % this.players.length];
    inHand.hand.push(element);
  });

  this.players.forEach(element => {
    if (element.score() > highestScore) {
      highestScore = element.score();
      highestName = element.name;

    }
    console.log(`${element.name}: ${element.score()}`);
  });
  console.log(`${highestName} is the Winner with ${highestScore}`);
}

// console.log(aDeck);
let player1 = new Player("bingyuan1");
let player2 = new Player("bingyuan2");
let player3 = new Player("bingyuan3");
let player4 = new Player("bingyuan4");
let player5 = new Player("bingyuan5");
let allPlayers = [player1, player2, player3, player4, player5];

let a = newGame();
let aDeck = new Deck(a);
aDeck.shuffle();

let c = aDeck.cards;
let aGame = new Game(allPlayers, c);

// console.log(c)
aGame.play()