// function prime(max) { 
//   let a = [];
//   for(let x = 2; x < max; x++){
//     for (let y = 2; y < x; y++) {
//       if (x % y !== 0) {
//         a.push(x);
//       }
//     }
//   }
//  return a;
// }

// console.log(prime(max))


let prime = function (len) {
  let i, j;
  let arr = [];
  for (i = 1; i < len; i++) {
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      }
    }
    if (i <= j && i != 1) {
      arr.push(i);
    }

  }
  return arr;
};
// console.log(prime(10000));



let a = prime(10000);


let result = 0;
let b = [5,4,3,2,1];
let c =[];

for (let z = 5; z > 0; z--) {
  b.length = z;
  for (let x = 0; x < z; x++) {
    for (let y = 0; y < x; y++) {
      result += b[y];
    }
    c.push(result);
    result = 0;
  }
}

console.log(c);

