// You are buying a product online. The price of the product is 1200 taka. If the price is above 1000 taka, you get a 10% discount. If you use a coupon, you get an additional 5% discount. However, the total discount cannot exceed 15%. Write a program to calculate the final price after applying the discount rules.


const productPrice = 1200;
const isAbovePrice = 1000;
let coupon = true;

let discount = 0;

if (productPrice > isAbovePrice) {
  discount += 10;
}

if (coupon) {
  discount += 5;
}

if (discount > 15) {
  discount = 15;
}

const finalPrice = productPrice - (productPrice * discount / 100);
console.log("Total amount", finalPrice);

