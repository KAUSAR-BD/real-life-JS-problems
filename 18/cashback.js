// You earn 3,500 taka. You spend 1,200 taka on groceries and 800 taka on rent.Then you buy items worth 1,100 taka from a shop that offers 5% cashback on purchases above 1,000 taka.

// How much money do you have left after all expenses?
// Calculate the cashback and add it to your remaining balance.
// Check if your final balance is at least 500 taka.



const earnMoney = 3500;
const groceries = 1200;
const rent = 800;
const shopping = 1100;

const allExpenses = groceries + rent + shopping;
console.log("My expenses:", allExpenses);

let remainingBalance = earnMoney - allExpenses;
console.log("Remaining money after expenses:", remainingBalance);

let cashBack = 0;
if (shopping > 1000) {
  cashBack = shopping * 0.05;
  console.log("You get 5% cashback:", cashBack);
}

const totalRemainingBalance = remainingBalance + cashBack;
console.log("After cashback, total balance is:", totalRemainingBalance);

if (totalRemainingBalance >= 500) {
  console.log("That is my savings");
} else {
  console.log("I have to be careful about shopping");
}
