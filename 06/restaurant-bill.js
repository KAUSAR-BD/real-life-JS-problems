// You and four friends go to a restaurant. The bill is 2,200 taka. Split the bill equally and check if any one of you pays more than 500 taka.


const numberOfPeople = 5;
const restaurantBill = 2200;

const payBill = Math.floor(restaurantBill / numberOfPeople);
console.log(payBill);

if (payBill > 500) {
  console.log("Someone pays more than 500 taka");
} else {
  console.log("No one pays more than 500 taka");
}
