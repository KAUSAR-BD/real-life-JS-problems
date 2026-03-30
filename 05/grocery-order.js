// You order groceries worth 950 taka. Delivery is free for orders above 1,000 taka; otherwise, the delivery charge is 50 taka. Calculate the total bill including delivery.

const totalGroceryCost = 950;
const deliveryCharge = 50;

if (totalGroceryCost > 1000) {
  console.log("Free delivery");
} else {
  const finalBill = totalGroceryCost + deliveryCharge;
  console.log("Final bill", finalBill);
}
