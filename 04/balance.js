// You have three bank accounts with balances of 2,000, 3,500, and 1,200 taka. You want to buy a bicycle costing 6,000 taka. Check if you have enough total money.

const firstAccount = 2000;
const secondAccount = 3500;
const thirdAccount = 1200;

const bicycleCosting = 6000;

const myTotalBalance = firstAccount + secondAccount + thirdAccount;
console.log(myTotalBalance);

if (myTotalBalance >= bicycleCosting) {
  console.log("I can buy a bicycle");
} else {
    console.log("I need to save more money")
}
