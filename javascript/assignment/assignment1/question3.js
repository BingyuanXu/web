let result = ``;

for (let row = 1; row <= 9; row++) {

  for (let column = 1; column <= 9; column++) {
    if (column === 9) {
      result += column * row;
    } else if (row * (column + 1) < 10) {
      result += column * row + `   `;
    } else {
      result += column * row + `  `;
    }
  }
  
  result += `\n`;
}

console.log(result);