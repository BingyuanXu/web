// repeat("abcd");// should return "A-Bb-Ccc-Dddd"
// repeat("RqaEzty");// should return "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// repeat("cwAt");// should return "C-Ww-Aaa-Tttt"
//Q1

// let b = "RqaEzty".split(``);
// let total = "";

// b.forEach(function(ele, index) {
//   for (let x = 0; x <= index; x++) {
//     if (x === 0) {
//       total += ele.toUpperCase();
//     } else {
//       total += ele.toLowerCase();
//     }
//   }
//   total += "-";
// });
// console.log(total.substring(0, total.length - 2));

//Q2

getMiddle("test") //should return "es"
getMiddle("testing") //should return "t"
getMiddle("middle") //should return "dd"
getMiddle("A") //should return "A"

function getMiddle(aString) {
if (aString.length % 2 === 0) {
  console.log(aString[aString.length / 2] + aString[aString.length / 2 - 1]);
} else {
  console.log(
    aString[(aString.length - 1) / 2]
  );
}
}

//Q3

// let arrayToSplit = "Colin Toh owns 10 detective books";
// // do some stuff, split, titlelize, join
// // print out "Colin Toh Owns 10 Detective Books"

// let a = arrayToSplit.split(" ");

// let b = a.map(ele => ele[0].toUpperCase() + ele.substring(1, ele.length));
// b = b.join(` `);

// console.log(b);
