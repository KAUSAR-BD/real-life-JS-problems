// You go to a grocery shop with 500tk . You buy rice for 180tk, Oil for 120tk, and vegetables for 90tk. After paying, check if you still have enough money (at least 100tk) to buy fruits.


const myTotalMoney = 500;

const ricePrice = 180;
const oilPrice = 120;
const vegetablesPrice = 90;

const myExpense = ricePrice + oilPrice + vegetablesPrice;
console.log(myExpense);

const myRemainingMoney = myTotalMoney - myExpense;
console.log(myRemainingMoney);

if(myRemainingMoney >= 100){
    console.log('i can buy fruits');
}else{
    console.log('i can not buy fruits');
}