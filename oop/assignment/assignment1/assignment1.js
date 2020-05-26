function VendingMachine(items) {
  this.items = items;
  this.float = 0.00;
  this.breakCountdown = 10;    // when count to 0, the machine will break
}

VendingMachine.prototype.vend = function (itemCode, insertAmount) {
  const item = this.items.find(aItem => aItem[`code`] === itemCode);   //item is equal to an item object with exactly code or undefined if not found 

  if (this.breakCountdown < 1) {
    console.log(`fnkfl38s!ERROR@893infk`);
  } else {
    if (item === undefined) {
      console.log(`Invalid selection! : Money in vending machine = ${this.float.toFixed(2)}`);
    } else {
      if (item[`quantity`] === 0) {
        console.log(`${item[`name`]}: Out of stock!`);
      } else {
        if (insertAmount < item[`price`]) {
          console.log(`Not enough money!`);
        } else {
          this.breakCountdown--;
          this.float += item[`price`];
          item[`quantity`]--;
          console.log(`Vending ${item[`name`]}` + `${insertAmount === item[`price`] ? `` : ` with ${(insertAmount - item[`price`]).toFixed(2)} change`}.`);
        }
      }
    }
  }
}

VendingMachine.prototype.addItems = function (newItemName, newItemCode, newItemPrice) {
  const item = this.items.find(aItem => aItem[`code`] === newItemCode);

  if (this.breakCountdown < 1) {
    console.log(`fnkfl38s!ERROR@893infk`);
  } else {
    if (item !== undefined) {
      console.log(`Sorry, ${item[`name`]} is already using that code, please pick another`);
    } else {
      this.items.push({ name: newItemName, code: newItemCode, quantity: 0, price: newItemPrice });
      console.log(`New product availalble: ${newItemName} for only $${newItemPrice.toFixed(2)}`);
    }
  }
}

VendingMachine.prototype.repair = function () {
  this.breakCountdown = 10;
}

const items = [
  { name: "Smarties", code: "A01", quantity: 10, price: 1.60 },
  { name: "Caramilk Bar", code: "A02", quantity: 5, price: 1.30 },
  { name: "Dairy Milk", code: "A03", quantity: 1, price: 1.35 },
  { name: "Aero", code: "A04", quantity: 1, price: 0.25 },
  { name: "Protein Bar", code: "B01", quantity: 6, price: 2.25 },
  { name: "Salt & Vinager Chips", code: "B02", quantity: 10, price: 1.45 },
  { name: "Ketchup Chips", code: "B03", quantity: 3, price: 1.45 },
  { name: "Chocolate Cookies", code: "B04", quantity: 1, price: 0.45 },
  { name: "Gummy Bears", code: "C02", quantity: 300, price: 0.01 },
  { name: "Caramels", code: "C01", quantity: 0, price: 3.25 },
];

const machine = new VendingMachine(items);

class a {}
console.log(typeof(a))