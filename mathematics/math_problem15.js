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
let n = +userInput[0]
let landr = userInput[1].split(" ").map(val=>+val)
let l = landr[0]
let r = landr[1]

if (l<n && n<r){
    console.log("yes")
}else{
    console.log("no")
}



//end-here
});
