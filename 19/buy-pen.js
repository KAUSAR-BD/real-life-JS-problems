// You have 1,000 taka and need to buy pens costing 35 taka each. Check if you can buy 30 pens.

const hasMoney = 1000;
const eachPen = 35;
const numberOfPens = 30;

if (hasMoney >= numberOfPens * eachPen) {
  console.log("I can buy 30 pens");
} else {
  console.log("I can not buy 30 pens");
}

// or
// maximum number of pens
const maxPens = Math.floor(hasMoney / eachPen);
console.log("MAximum number of pens I can buy", maxPens);