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
let nandk = userInput[0].split(" ").map(val=>+val)
let n = nandk[0]
let k = nandk[1]
let area = (1/2)*n*k

console.log(area)





//end-here
});
