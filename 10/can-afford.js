// You have 5,000 taka. You buy shoes for 2,400 taka and a jacket for 3,000 taka. Check if your balance goes negative.


const myBalance = 5000;
const shoesPrice = 2400;
const jacketPrice = 3000;

const totalExpense = shoesPrice + jacketPrice;

if (totalExpense > myBalance) {
  console.log("My balance will go negative");
} else {
  console.log("I can afford these items");
}
