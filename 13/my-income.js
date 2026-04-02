// Your monthly income is 18,000 taka, and your monthly expenses are 15,000 taka. Calculate your savings and check if it is at least 20% of your income.

const monthlyIncome = 18000;
const monthlyExpenses = 15000;

const mySavings = monthlyIncome - monthlyExpenses;
console.log("My monthly savings is:", mySavings);

const requiredSavings = monthlyIncome * 0.2; //20%
console.log("Need to save 20% of income:", requiredSavings);

if (mySavings < requiredSavings) {
  console.log("My savings is not 20% of my income");
}else{
    console.log("My savings is at least 20% of my income");
}
