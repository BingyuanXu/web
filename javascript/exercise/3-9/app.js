// let a = [true, `eat`, {name: `abc`}, function() {alert('hello')}];
// alert(a[3]());

//Q0

// let captain = "Picard";
// let commander = "Will";
// let ensign = "Wesley";
// let android = "Data";
// let security = "Worf";
// let engineering = "Geordi";
// let crew = [captain, commander, ensign, android, security, engineering];

// console.log(crew);

//Q1

// let prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// prices[0] = 1;
// prices[2] = 2;
// prices[7] = 3;


//Q2

// arrayClone([1, 5, 4, 19]); // returns a new array [1,5,4,19]
// let arrayClone = ['a', ['b', 'c'], 'd']; // returns a new array ['a', ['b', 'c'], 'd']

// function bing(x) {
//  let b=[];
//   for (y of x) {
//     b[b.length] = y;
//   }
//   return b;
// }
// console.log(bing(arrayClone));


//Q3
// let = first[7, 9, 0, -2], 3;// returns [7, 9, 0]
// let first = [7, 9, 0, -2];
// function bing(x, y) {
//   let b = [];
//   for (let q = 0; q < y; q++) {
//     b[x] = x[q];
//   }
//   return b;
// }

// console.log(bing(first, 2));


//Q4

// function lessThanFourChars(x) {
//   const b =[];

//   for (y of x) {
//     if (y.length < 4) {
//       b[b.length]=y;
//     }
//   }

//   return b;
// }
// console.log(lessThanFourChars(["this", "that", "foo", "I", "Software"]));

// let a = [89, 28, 22, 20, 41, 1, 39, 41, 67];
// let b;
// for (let y = 0; y < a.length; y++) {
//   for (let x = 0; x < a.length - y; x++) {
//     if (a[x + 1] < a[x]) {
//       b = a[x];
//       a[x] = a[x + 1];
//       a[x + 1] = b;
//     }
//   }
// }

// console.log(a);





