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
let nandm = userInput[0].split(" ").map(val=>+val)
let n = nandm[0]
let m = nandm[1]
let sum = n+m

if ( sum%2 === 0){
    console.log("even")
}else{
    console.log("odd")
}



//end-here
});
