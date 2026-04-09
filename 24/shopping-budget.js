// You go to a clothing store and buy 3 pairs of pants, each costing 1200 taka. The store has a discount policy where if your total purchase exceeds 3000 taka, you receive a 15% discount; otherwise, you get a 10% discount. After applying the discount, a 5% VAT is added to the discounted price. Additionally, if the final amount after VAT is less than 3500 taka, a delivery charge of 100 taka is added; otherwise, delivery is free. Determine your final payable amount and check whether the purchase is considered "Affordable" (3500 taka or less) or "Expensive" (more than 3500 taka).

const pantsCostEach = 1200;

const totalPantsCost = pantsCostEach * 3;
console.log("Three pants cost:", totalPantsCost);

let discountAmount = 0;

if (totalPantsCost > 3000) {
  discountAmount = totalPantsCost - totalPantsCost * 0.15; // 15%

  console.log("Amount with 15% discount:", discountAmount);
} else {
  discountAmount = totalPantsCost - totalPantsCost * 0.1; // 10%

  console.log("Amount with 10% discount:", discountAmount);
}

const vatAmount = discountAmount * 0.05;
const vatPayableAmount = discountAmount + vatAmount;

let finalAmount = 0;

if (vatPayableAmount < 3500) {
  finalAmount = vatPayableAmount + 100;

  console.log("Payable with Delivery charge:", finalAmount);
} else {
  finalAmount = vatPayableAmount;
  console.log("Final payable with free delivery:", vatPayableAmount);
}

if (finalAmount <= 3500) {
  console.log("Affordable");
} else {
  console.log("Expensive");
}


