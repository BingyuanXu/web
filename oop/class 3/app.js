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
  const rank = {1: "ace", 11: "Jack", 12: "Queen", 13: "King"}[this.rank] || this.rank;

  if (this.rank === 1) {   //switch 好一点
    console.log(`Ace of ${this.suit}"`);
  } else if (this.rank === 13) {
    console.log(`King of ${this.suit}"`);
  } else if (this.rank === 12) {
    console.log(`Queen of ${this.suit}"`);
  } else if ((this.rank === 11))
    console.log(`Jack of ${this.suit}"`);
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

let a = newGame();
// console.log(a);

let aDeck = new Deck(a);

// console.log(aDeck);

aDeck.count();
aDeck.shuffle();
console.log(aDeck.cards);
console.log(aDeck.draw(10));
console.log(aDeck.cards);

