var fs = require("fs");
var data = fs.readFileSync("input.txt");
//fs is module to read the file (file system)
//Syncronous: will wait until data.toString read done, then continue next console.log

console.log(data.toString());
console.log("Program Ended");
