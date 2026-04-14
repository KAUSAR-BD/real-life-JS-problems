// A shopkeeper decides to adjust the pricing of a product originally costing 850 taka by increasing it by 12%. After this change, a festive offer is introduced where a 5% discount is applied on the increased price. On top of that, a small service charge of 2% is added to the discounted price.Determine the final payable price after all these changes and then check whether this final price exceeds 950 taka or remains below it.


const originalPrice = 850;
let festival = true;

let increasedPrice = originalPrice + originalPrice * 0.12; // 12%
console.log("New price is:", increasedPrice);

// festival
let discountedPrice = festival
  ? increasedPrice - increasedPrice * 0.05 // 5%
  : increasedPrice;

let finalPrice = discountedPrice + discountedPrice * 0.02; // 2%

if (finalPrice > 950) {
  console.log("Good deal, price is acceptable");
} else {
  console.log("Price is too high for this product");
}


 // if else version (festival)

//  let discountedPrice;
//  if(festival){
//     discountedPrice = increasedPrice - increasedPrice * 0.05; // 5%
//  }else{
//     discountedPrice = increasedPrice;
//  }