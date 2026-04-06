// You earn 2,500 taka and plan to save 20%. Calculate your savings and check if the remaining spending is more than 1,800 taka.


const hasMoney = 2500;

const savings = hasMoney * 0.2; // 20%
console.log("My savings:", savings);

const expenses = hasMoney - savings;
console.log("My expenses:", expenses);

if(expenses > 1800){
    console.log(" My expenses are high");
}else{
    console.log("My expenses are under control");
}

