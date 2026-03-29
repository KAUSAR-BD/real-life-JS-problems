// Your mobile data pack gives 2 GB per day. Today you used 1.2 GB in the morning and 0.9 GB at night. Check if you exceeded your daily limit.

const perDayData = 2; 
const morningData = 1.2; 
const nightData = 0.9;

const todayUsed = morningData + nightData;

if (todayUsed > perDayData) {
  console.log("Daily limit exceeded");
}
