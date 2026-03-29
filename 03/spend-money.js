// You earn 800 taka today from freelance work. You decide to save 30% of your income and spend the remaining amount.

//Task:

// Calculate how much money you save.
// Calculate how much money you spend.
// Check whether your spending is more than 500 taka.

const todayEarning = 800;

const mySavings = todayEarning * 0.3; // 30% savings

const remainingAmount = todayEarning - mySavings;

console.log("I saved:", mySavings, "taka");
console.log("I will spend:", remainingAmount, "taka");

if (remainingAmount > 500) {
  console.log("I will buy a shirt");
} else {
  console.log("I will not spend much today");
}
