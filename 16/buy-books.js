// You have 2,500 taka and want to buy three books priced at 700 taka each. Calculate the total cost and check if you can afford all three books.


const hasMoney = 2500;
const perBookPrice = 700;

const totalCost = perBookPrice * 3;

if(totalCost <= hasMoney){
    console.log("I can buy all three of them");
}else{
    console.log("I don't have money");
}