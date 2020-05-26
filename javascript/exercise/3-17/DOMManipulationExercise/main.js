let bookName = document.querySelector(`h1`);
let bookList = document.createElement('ol');

bookName.textContent = `my favourite book`;

for (let x = 0; x < 2; x++) {
  bookList.insertAdjacentHTML("beforeend", `<li>book1</li>`);
}


for (let x = 0; x < 2; x++) {
  let li = document.createElement('li');
  li.textContent = `book2`
  li.className = `book` + x;
  bookList.append(li);
}


document.querySelector(`h4`).append(bookList);

let reds = document.querySelectorAll(`.red`);
for (red of reds) {
  red.className = `green`;
}

let annoying = document.querySelector(`a`);
annoying.href = `http://www.cashcats.biz`;
// annoying.style.position = `relative`;  
annoying.style.right = `0`; 
annoying.style.top = `30px`; 
// annoying.setAttribute(`position`, `static`)


let ellipsis = document.querySelectorAll(`.suggested-topics li`);

for (list of ellipsis) {
  if (list.textContent === `...`) {
    list.textContent = `hehe`;
  }
} 

document.querySelector(`input`).outerHTML = `<textarea></textarea>`; 


let styleNum = getComputedStyle(annoying);
console.log(styleNum.lineHeight);

let div = document.querySelector(`div.suggested-topics`);

div.setAttribute(`data-Li-Num`, div.querySelectorAll(`li`).length);


