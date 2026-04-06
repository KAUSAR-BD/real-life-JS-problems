// You bought 3 items for 750, 450, and 300 taka. Check if the total is divisible by 100.



const item1 = 750;
const item2 = 450;
const item3 = 300;

const totalSum = item1 + item2 + item3;
console.log("Total", totalSum);

if (totalSum % 100 === 0) {
  console.log("Divisible by 100");
} else {
  console.log("Not divisible by 100");
}
