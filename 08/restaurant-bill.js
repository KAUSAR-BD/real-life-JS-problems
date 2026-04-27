// A restaurant prepares a bill of 1,200 taka for a customer. A service tax of 7% is added to the bill. After that, a discount coupon of 5% is applied on the taxed amount for membership holders. Finally, a delivery fee of 100 taka is added.Calculate the final bill amount and check whether it is more than 1,300 taka or not.

const customerBill = 1200;
const hasMembership = true;
const deliveryCharge = 100;

// add tax
const taxedAmount = customerBill + customerBill * 0.07;

// only is member
let discountedAmount = taxedAmount;

if (hasMembership) {
  discountedAmount = taxedAmount - taxedAmount * 0.05;
}

const finalBill = discountedAmount + deliveryCharge;

if(finalBill > 1300){
    console.log("Its a little expensive");
}else{
    console.log("With in budget");
}


