// A store offers “Buy 2, Get 1 Free.” You need 7 items. Calculate how many items you actually pay for.



const neededItems = 7;
const buy = 2;
const get = 1;

const groupSize = buy + get;

const fullGroups = Math.floor(neededItems / groupSize);
let payableItems = fullGroups * buy;

// remaining payable
const remainingItems = neededItems % groupSize;
// total payable
payableItems += remainingItems;

console.log("Payable Items:", payableItems);
