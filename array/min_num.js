const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let nums = userInput[1].split(" ").map(val=>+val)
nums.sort((a,b)=>a-b)
console.log(nums[0])



//end-here
});
