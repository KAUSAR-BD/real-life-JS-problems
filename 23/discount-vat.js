// You buy 2 shirts costing 800 taka each. The store offers a 20% discount on the total bill. After the discount, a 5% VAT is added to the discounted price. Determine whether your final cost is below 1,500 taka.


const eachShirt = 800;
const shirtsPrice = eachShirt * 2;
console.log("Two Shirt Price:", shirtsPrice);

const discountAmount = shirtsPrice * 0.2; // 20%
console.log("20% Discount Amount:", discountAmount);

const discountPrice = shirtsPrice - discountAmount;
console.log("Discount shirt Price:", discountPrice);

const withVatAmount = discountPrice * 0.05; // 5% VAT
console.log("Applicable VAT amount:", withVatAmount);

const totalAmount = discountPrice + withVatAmount;
console.log("Final Bill:", totalAmount);

if(totalAmount < 1500){
    console.log("It is a good deal");
}else{
    console.log("Price is high");
}