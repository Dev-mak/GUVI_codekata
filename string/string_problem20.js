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
let str = userInput[0].split("")
let evenarr = []
let oddarr = []

for(let i =0;i<str.length;i++){
    if(i%2===0){
        evenarr.push(str[i])
    }else{
        oddarr.push(str[i])
    }
}
console.log(evenarr.join("")+" "+oddarr.join(""))




//end-here
});
