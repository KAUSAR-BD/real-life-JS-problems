// Your electricity bill is calculated at 8 taka per unit. You used 150 units this month. Check if your total bill is more than 1,000 taka.


const billPerUnit = 8;
const usedElectricity = 150;

const myTotalBill = usedElectricity * billPerUnit;
console.log("This month's electricity bill", myTotalBill);

if (myTotalBill > 1000) {
  console.log("This is too much:", myTotalBill);
}else{
    console.log("This is comfortable:", myTotalBill);
}
