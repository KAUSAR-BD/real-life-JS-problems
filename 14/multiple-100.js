// You bought 4 items, each costing 99 taka. Calculate the total cost and check if it is a multiple of 100.


const items = 4;
const perItemsCost = 99;

const totalCost = items * perItemsCost;
console.log("Total cost:", totalCost);

if(totalCost % 100 === 0){
    console.log("It is a multiple of 100");
}else{
    console.log("It is not multiple of 100");
}