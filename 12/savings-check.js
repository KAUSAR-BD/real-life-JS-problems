// If you save 50 taka every day for 30 days, what will be your total savings at the end of the month? After calculating your total, determine whether you have saved at least 3921 taka. If not, how much more money do you need to reach your goal? Additionally, if you continue saving at the same daily rate, how many extra days will it take you to achieve a total of 2000 taka?

const perDaySavings = 50;
const totalDays = 30;

const endOfMonthTotal = perDaySavings * totalDays;
console.log("Total savings at the end of the month:", endOfMonthTotal + " " + 'taka');

if (endOfMonthTotal >= 3921) {
  console.log("I reach the goal");
} else {
  const moneyNeed = 3921 - endOfMonthTotal;
  console.log("Money needed to reach the goal:", moneyNeed + " " + "taka");

  const totalDaysNeed = Math.ceil(moneyNeed / perDaySavings);
  console.log("Extra days needed", totalDaysNeed + " " + "Days");
}
