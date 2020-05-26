class RepairList {
  constructor() {
    this.repairs = [];
  }

  addRepair(description) {
    const newRepair = new Repair(description);
    this.repairs.unshift(newRepair)
    this.redraw()
  }

  deleteRepair(id) {
    this.repairs.splice(id, 1);
    this.redraw();
  }

  markAsComplete(id) {
    this.repairs[id].completed = true;
    this.redraw();
  }

  unmarkAsComplete(id) {
    this.repairs[id].completed = false;
    this.redraw();
  }

  clearCompleted() {
    this.repairs = this.repairs.filter(repair => repair.completed === false);
    this.redraw();
  }

  redraw() {
    ul.innerHTML = ``;

    this.repairs.forEach(function (repair, index) {
      ul.insertAdjacentHTML(`beforeend`, `
      <li data-id="${index}" class="${repair.completed ? `completed` : ``}">
      <div class="view">
        <input class="toggle" type="checkbox" ${repair.completed ? `checked=""` : ``}>
        <label>${repair.description}</label>
        <button class="destroy"></button>
      </div>
    </li>
      `)
    })
  }
}

class Repair {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }
}

const ul = document.querySelector(`ul`);
const inputEle = document.querySelector(`.new-repair`);
const button = document.querySelector(`.clear-completed`);
const repairList = new RepairList();

inputEle.addEventListener(`keypress`, function (event) {
  if (event.keyCode === 13 && inputEle.value !== ``) {
    repairList.addRepair(inputEle.value);
    inputEle.value = ``;
  }
});

ul.addEventListener(`click`, function (ele) {
  if (ele.target.className === `destroy`) {
    const targerLi = ele.target.closest('li');
    repairList.deleteRepair(targerLi.dataset.id);
  }
});

ul.addEventListener(`click`, function (ele) {
  if (ele.target.className === `toggle`) {
    const targerLi = ele.target.closest('li');

    if (targerLi.className === `completed`) {
      repairList.unmarkAsComplete(targerLi.dataset.id);
    } else {
      repairList.markAsComplete(targerLi.dataset.id);
    }
  }
});

button.addEventListener(`click`, function (ele) {
  repairList.clearCompleted();
});