// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  for (let x = 0; x < gridWidth.value; x++) {
    let tr = document.createElement(`tr`);
  
    for (let y = 0; y < gridHeight.value; y++) {
      tr.insertAdjacentHTML("beforeend", `<td></td>`);
    }
    table.append(tr);
  }
}



let table = document.querySelector(`table`);
let gridWidth = document.querySelector(`#inputWidth`);
let gridHeight = document.querySelector(`#inputHeight`);
let color = document.querySelector(`#colorPicker`);
let submit = document.querySelector(`form`).lastElementChild;


table.addEventListener(`click`, function(event) {
 event.target.style.backgroundColor = `${color.value}`;
 event.preventDefault();
});

submit.addEventListener(`click`, function(event){
  makeGrid();
  event.preventDefault();
  
});







