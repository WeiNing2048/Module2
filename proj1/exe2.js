var fs = require("fs");

fs.readFile("input.txt", function(err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
//Asynchronous: while reading input.txt, show console.log("Program") first

console.log("Program Ended");
