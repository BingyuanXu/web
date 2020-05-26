const table = document.getElementById(`boxes`);
const colorSelecter = document.getElementById(`color-picker`);
const boxes = document.getElementsByClassName(`color`);

table.addEventListener(`click`, function (event) {
  if (event.target.className === `color` && !event.target.dataset.colored) {

    if (colorSelecter.value !== ``) {
      event.target.style.backgroundColor = colorSelecter.value;
      colorSelecter.value = ``;
    } else {
      event.target.style.backgroundColor = randomColor();
    }

    event.target.textContent = event.target.style.backgroundColor;
    event.target.dataset.colored = true;
    checkBoxFullColored();
  }
});

function randomColor() {
  return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}

function checkBoxFullColored() {
  for (let box of boxes) {
    if (!box.dataset.colored) {
      return;
    }
  }

  alert(`page has been completely colored`);
}