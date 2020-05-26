function load(url) {
  return new Promise(function (resolve, reject) {
      const request = new XMLHttpRequest();

      request.onreadystatechange = function (e) {
          if (this.readyState === 4) {
              if (this.status == 200) {
                  resolve(this.response);
              } else {
                  reject(this.status);
              }
          }
      }
      request.open('GET', url, true);
      request.send();


  });
}

const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');

btn.onclick = function () {
  load('https://www.javascripttutorial.net/sample/promise/api.json')
      .then(
          response => {
              const result = JSON.parse(response);
              msg.innerHTML = result.message;
          },
          error => console.log(error)
      );
}

// let completed = true;

// let learnJS = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (completed) {
//             resolve("I have completed learning JS.");
//         } else {
//             reject("I haven't completed learning JS yet.");
//         }
//     }, 3 * 1000);
// });

const a = 0


let completed = true;

let sample = new Promise(function(resolve, reject){
  resolve = function(){
    console.log(`ok`);
  }
  if (a === 0){
  resolve();
  } else {
  reject(console.log(`not ok`));
  }
  });



// function A(a){
//   this.func = a;
// } 

// const ins = new A(function(resolve, reject));


// let a = new Promise(function(resolve, reject){
//   let b = 0;
//   if(b === 0) {
//     console.log(resolve);
//   }
// });


// function a(a){
//   return a; 
// }

// a(console.log(`ok`));