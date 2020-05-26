//Q0

// function joke() {
//   return `heeheehee!`;
// }

// console.log(joke());




//Q1

// function joke(num) {
//   let b='';
//   for (let x = 0; x < num; x++) {
//     b += `hee`;
//   }

//   return b;
// }


// console.log(joke(10));


//Q2


// function square(a) {
//   return a*a;
// }

// console.log(square(10));

//Q3

// function divisor(a) {
//   let b='';
//   for (let x = 0; x < a+1; x++) {
//     if (a % x === 0) {
//       b += `${x},`;
//     }
//   }  
//   return b;
// }

// console.log(divisor(12));


//Q4


// function repeatStr(a,b) {
//   let c = '';

//   for (let x = 0; x < a; x++) {
//      c += b;
//     }

//   return c;
// }

// console.log(repeatStr(5,'dsfsdfsdf'));


//Q5

function updateLight(a) {
  if (a === 'red') {
    return 'green';
  } else if (a === 'green') {
    return 'yellow'
  } else {
    return 'red';
  }

}

console.log(updateLight('yellow'));


//Q6

// function makeLine(length) {
//   let line = "";
//   for (let j = 1; j <= length; j++) {
//     line += "* "
//   }
//   return line + "\n";
// }


// function buildTriangle(a) {
//   for (let x = 0; x < a+1; x++) {
//     console.log(makeLine(x));
//   }
// }

// console.log(buildTriangle(10));


//Q7

// function up(a) {
//   let space = '';
//   for (let x = 0; x < a-1; x++) {
//     for (let b = 0; b < x; b++) {
//       space += ' ';
//     }
//     space = space + '*' + "\n"
//   }
//   return space;
// }

// function down(a) {
//   let space = '';
//   for (let x = a; x > 0; x--) {
//     for (let b = 0; b < x-1; b++) {
//       space += ' ';
//     }
//     space = space + '*' + "\n"
//   }
//   return space;
// }

// let x = prompt('enter a number');

// while (Number(x) <= 0 || parseInt(x) !== parseFloat(x) || ((!Number(x) && Number(x)) != 0)) {
//    x = prompt('enter a right right number !!!!!!!!!!!');
// }

// console.log(up(x) + down(x));

 








