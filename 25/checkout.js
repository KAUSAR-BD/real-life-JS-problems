// You visit a shop and purchase 2 shirts priced at 800 taka each and 1 jacket priced at 2000 taka. The shop offers a discount based on the number of items purchased: if you buy 3 or more items, you get a 20% discount; otherwise, you get a 10% discount. After applying the discount, you can use a coupon worth 200 taka, but only if the discounted price exceeds 2500 taka. Once the coupon is applied, an 8% VAT is added to the remaining amount. Calculate the final amount you need to pay and determine whether it is "Within budget" (3000 taka or less) or "Over budget" (more than 3000 taka).



const shirtsPrice = 800;
const jacketsPrice = 2000;

const shirts = 2;
const jackets = 1;

let totalPrice = (shirtsPrice * shirts) + (jacketsPrice * jackets);

let discountPrice = 0;
const itemCount = shirts + jackets;

if(itemCount >= 3){
  discountPrice = totalPrice -(totalPrice * 0.20);
}else{
   discountPrice = totalPrice - (totalPrice * 0.10);
}

if(discountPrice >= 2500){
  discountPrice -= 200;
  console.log(discountPrice);
}

const finalAmount = Math.floor(discountPrice + (discountPrice * 0.08));

if(finalAmount <= 3000){
  console.log("Within budget");
}else{
  console.log("Over budget");
}

