// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let strarr = userInput[0].split(" ")
let str1 = strarr[0]
let str2 = strarr[1]

if(str2.search(str1)!==-1){
    console.log("yes")
}else{
    console.log("no")
}


  //end-here
});