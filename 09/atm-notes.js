// You withdraw 3,000 taka from an ATM dispensing only 1,000-taka notes. Calculate how many notes you receive and if there is any remainder.


const myWithdraw = 3000;
const atmDispensingNotes = 1000;

const notesReceive = Math.floor(myWithdraw / atmDispensingNotes); // full notes. No decimal

const remainder = myWithdraw % atmDispensingNotes; // leftover amount

console.log("Notes Received:", notesReceive);

if (remainder > 0) {
  // dosen't divide evenly (remainder > 0)- print leftover
  console.log("Remainder:", remainder, "taka can not be given in full notes");
} else {
    // divide evenly (remainder = 0)- print full notes
  console.log("No remainder, all money dispensed in full notes");
}
