//Q0
// const returnMiddle = x => {}
// function returnMiddle(aArray) {

//   if ((aArray.length - 1) %2 ===0) {
//     return console.log(aArray[(aArray.length - 1) / 2]);
//   } else {
//     console.log([Math.floor((aArray.length - 1) / 2), Math.ceil((aArray.length - 1) / 2)]);
//   }
// }

// returnMiddle([1, 2, 3, 4, 5, 6, 7]); // returns 4
// returnMiddle([1, 2, 3, 4, 5, 6, 7, 8]); // returns [4, 5]


//Q2

// flipCharacters("myString") // returns "gyStrinm"
// flipCharacters("John") // returns "nohJ"
// flipCharacters("hi") // returns "ih"

// function flipCharacters(a) {
//   let x = a.split('');
//  let tempornary = x[0];
//   x[0] = x[x.length-1];
//   x[x.length-1] = tempornary;
//     console.log(x.join(''));
// }


//Q3

// returns [1, 2, 6, 12 ]


// let multiply = [1, 2, 3, 4]; // returns [1, 2, 6, 12 ]

// let map1 = multiply.map((x, index) => {
//   if (index != 0) {
//     return x * (x - 1);
//   } else {
//     return 1;
//   }
// })
// console.log(map1);


// const multiply = y => y.map(x => x * (x - 1));
// console.log(multiply([1,2,3,4])); 


//Q4
// let a = [[2, 3, 4], [1, 1, 1], [6, 5, 9, 10, 1], [2]];
// let b;

// b = (a.split()).split();
// console.log(b);


