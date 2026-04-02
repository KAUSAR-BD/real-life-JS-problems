// You want to buy a laptop for 60,000 taka. You have already saved 42,000 taka and plan to save 3,000 taka more each month. Check if you can afford the laptop in 6 months.



const laptopPrice = 60000;
const hasMoney = 42000;
const monthlySavings = 3000;
const months = 6;

const totalMoney = hasMoney + monthlySavings * months;

console.log("Total money after 6 months:", totalMoney);

if (totalMoney >= laptopPrice) {

  console.log("I can buy laptop");

} else {

    console.log("I can not buy the laptop");

}
