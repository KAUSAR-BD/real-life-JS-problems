// The smart discount system applies discounts based on price and premium status. Prices of 3000 or more get a 20% discount, while prices of at least 1000 get 10%, and anything lower gets none. Premium users receive an additional 5% discount, capped at a maximum total of 25%. For a price of 3200 with a premium user, the total discount becomes 25%, resulting in a final price of 2400.


let price = 3200;
let premium = true;
let discount = 0;

if(price >= 3000){
    discount = 20;
}else if(price >= 1000){
    discount = 10;
}

if(premium){
    discount += 5;
}

// maxmimum discount range
if(discount > 25){
    discount = 25;
}

let finalPrice = price - (price * discount / 100);

console.log("Payable Price is:", finalPrice);