//Q1

// The Rise and Shine - $10.95
// eggs, sausage, toast, hashbrowns, pancakes

// let menu = {
//   name: "Rise and Shine",
//   price: `$10.95`,
//   ingredients: "eggs, sausage, toast, hashbrowns, pancakes",
// };

// console.log(menu.price);

//Q1
//lastName, hairColor, favoriteActivity and a method called fullName

// let me = {
//   firstName: "Bingyuan",
//   lastName: "Xu",
//   hairColor: `black`,
//   favoriteActivity: `sking`,
//   fullName: x =>  me.lastName + me.firstName,
// }

// console.log(me.fullName());

//Q2

// let dog = {
//   age: 3,
//   breed: "meet",
//   color: "white",
//   isWalking: true,
//   bark: () => console.log('Woof woof'),
//   walkOrStop: () =>  dog.isWalking = !dog.isWalking,
// }

// dog.bark();
// console.log(dog.isWalking);
// dog.walkOrStop();
// console.log(dog.isWalking);
// console.log(dog.isWalking);
// dog.walkOrStop();
// console.log(dog.isWalking);
// console.log(dog.isWalking);
// dog.walkOrStop();
// console.log(dog.isWalking);

//Q3

// let savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     //add money in the deposit
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     let verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   }, // withdrow money

//   printAccountSummary: () =>
//     console.log(
//       `Your balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`
//     ),
// }; 

// savingsAccount.deposit(200);
// savingsAccount.withdraw(100);
// savingsAccount.printAccountSummary();

//Q4

// let facebookProfile = {
//   name: `bingyuanxu`,
//   friends: 10,
//   messages: [`aaa`, `bbb`, `ccc`],
//   postMessage: message => {
//     facebookProfile.messages.push(message);
//   },
//   deleteMessage: index => {
//     facebookProfile.messages = facebookProfile.messages.filter((ele,inIndex) => inIndex !== index);
//   },
//   addFriend: () => facebookProfile.friends++,
//   removeFriend: () => facebookProfile.friends--,
// }
// facebookProfile.postMessage(`ddddd`);
// console.log(facebookProfile.messages);
// facebookProfile.deleteMessage(1);
// console.log(facebookProfile.messages);
// console.log(facebookProfile.friends);
// facebookProfile.addFriend();
// console.log(facebookProfile.friends);
// console.log(facebookProfile.friends);
// facebookProfile.addFriend();
// console.log(facebookProfile.friends);
// facebookProfile.removeFriend();
// console.log(facebookProfile.friends);

//Q5

// const book = [
//   {
//     title: `1`,
//     author: `a`,
//     alreadyRead: true,
//   },

//   {
//     title: `2`,
//     author: `b`,
//     alreadyRead: false,
//   },

//   {
//     title: `3`,
//     author: `c`,
//     alreadyRead: true,
//   },
//   {
//     title: `4`,
//     author: `d`,
//     alreadyRead: false,
//   },
//   {
//     title: `5`,
//     author: `e`,
//     alreadyRead: true,
//   },
// ]

// book.forEach(ele => {
//   if (ele.alreadyRead) {
//     console.log(`You already read "${ele.title}" by ${ele.author}.`);
//   } else {
//     console.log(`You still need to read "${ele.title}" by ${ele.author}.`);
//   }
// })

//Q6

// let donuts = [
//   { type: "Jelly", cost: 1.22 },
//   { type: "Chocolate", cost: 2.45 },
//   { type: "Cider", cost: 1.59 },
//   { type: "Boston Cream", cost: 5.99 }
// ];

// donuts.forEach(ele => console.log(`${ele.type} donuts cost $${ele.cost} each` ))

//Q7

// let order = [[1, 'hamburger'], [4, 'hotdog'], [2, 'coke'], [4, 'milk']];
// let data = {cost: {hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4}};
// let total = 0;

// order.forEach(function(ele) {
//   total += data.cost[ele[1]] * ele[0];
//   return total;
// })

// console.log(total);

//Q8

// removeConsecutive('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');

// removeConsecutive('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');

// function removeConsecutive(a) {
//   let b = a.split(` `);
//   console.log(b.filter((ele, index) => ele !== b[index+1]));
// }
