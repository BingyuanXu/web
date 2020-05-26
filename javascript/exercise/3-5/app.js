//Q0

// function gcd () {
//   let q;
//   for (let x = 1; x <= small; x++ ) {
//     if (small % x === 0 && big % x === 0) {
//       q = x;
//     }
//   }
//   return q;
// }

// let a = parseInt(prompt("hey, enter a number!", "")), b = parseInt(prompt("hey, enter a number!", "")), big, small;

// if (a > b) {
//   big = a;
//   small = b;
// } else {
//   big = b;
//   small = a;
// }

// console.log(gcd());


//Q1


let width1 = parseInt(prompt("Enter the width for Rectangle 1", "")), length1 = parseInt(prompt("Enter the length for Rectangle 1", "")); width2 = parseInt(prompt("Enter the width for Rectangle 2", "")), length2 = parseInt(prompt("Enter the length for Rectangle 2", "")); 



// function compare() {
//   console.log(`#1 has an area of ${length1 * width1}.`);
//   console.log(`#2 has an area of ${length2 * width2}.`);
//   if ( length1 * width1 < length2 * width2) {
//     return console.log(`#2 is larger than Rectangle #1.`)
//   } else if (length1 * width1 > length2 * width2) {
//     return console.log(`#1 is larger than Rectangle #2.`)
//   } else {
//     console.log(`#2 is equial to Rectangle #1`)
//   }
// } 

// compare();

//Q2


// let q = parseInt(prompt("enter a number", ""));

// while (Number(q) <= 0 || parseInt(q) !== parseFloat(q) || ((!Number(q) && Number(q)) != 0)) {
//    q = prompt('enter a right right number !!!!!!!!!!!');
// }


// function check(a) {
//     let x = 2, c = 2;
//     do {
//       if (a % x === 0) {
//         console.log(`${x} is a divisor of ${a}  ... stopping`); 
//         // c = x;
//         break;
//       }

//       console.log(`${x} is NOT a divisor of ${a}  ... continuing`);
//       // c = x;
//       x++;
//     } while (x !== a);

// if (c === a - 1) {
//   console.log(`${a} is a prime number!`);
// } else {
//   console.log(`${a} is not a prime number!`);
// }
// }

// check(q);



//Q3


// function makeLine(length) {
//   let line = "";
//   for (let j = 1; j <= length; j++) {
//     line += "* "
//   }
//   return line + "\n";
// }


// function buildTriangle(a) {
//   for (let x = a+1; x > 0; x--) {
//     console.log(makeLine(x));
//   }
// }

// console.log(buildTriangle(10));



//Q4




function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function getNum() {
  let r = parseInt(prompt("enter a number", ""));

  while (Number(r) <= 0 || parseInt(r) !== parseFloat(r) || ((!Number(r) && Number(r)) != 0)) {
    r = prompt('enter a right right number !!!!!!!!!!!');
  }
  
  return r;
}


let x = 0, r, a = getRandomInt(1, 5);

do {
  r = getNum();

  if (a === r) {
    console.log(`You guessed ${r}.\nYou got it! \nThe secret number was ${r}`);
    x++;
    console.log(`It only took you ${x} guesses.`);
    break;
  } else {
    console.log(`You guessed ${r}.\nSorry, that's wrong. Try again.`);
    x++;
    console.log(`It only took you ${x} guesses.`);
  }
} while (r !== a);

