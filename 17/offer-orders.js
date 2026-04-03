// You order food worth 780 taka. A coupon gives 100 taka off, but only if the order total is strictly greater than 800 taka after adding delivery charges. The delivery charge is 50 taka.

// - Calculate the final order amount including delivery.
// - Check if the coupon can be applied.
// - Print the payable amount after applying the coupon if eligible, otherwise print the full amount.



const orderFoodPrice = 780;
const couponOffer = 100;
const deliveryCharge = 50;

const orderAmount = orderFoodPrice + deliveryCharge;

console.log("Order amount with delivery charge:", orderAmount);

if (orderAmount > 800) {
  const finalAmount = orderAmount - couponOffer;
  console.log("Final payable amount after coupon:", finalAmount);
} else {
  console.log("Final payable amount:", orderAmount);
}
