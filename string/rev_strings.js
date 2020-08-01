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
function rev(string){
    let strarr = string.split("")
    strarr.reverse()
    return strarr.join("")
}
let strarr = userInput[0].split(" ")

for(let i=0;i<strarr.length;i++){
    strarr[i] = rev(strarr[i])
}
console.log(strarr.join(" "))

  //end-here
});