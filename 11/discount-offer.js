// A store offers a 10% discount on items above 2,000 taka. You buy an item for 2,400 taka. Calculate the final price after discount.


const discountPercent = 0.1; // 10%
const myItemPrice = 2400;

if (myItemPrice > 2000) {

  const discountPrice = myItemPrice * discountPercent;
  const finalPrice = myItemPrice - discountPrice;

  console.log("Final price after 10% discount", finalPrice);

} else {
  console.log("I have to buy more product");
}
