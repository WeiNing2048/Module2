var fs = require("fs");

function finishTheProg(err, data) {
  console.log(data.toString());
  console.log("Finish re-reading");
}

function reReadingFile(err) {
  if (err) console.log(err);
  console.log("Finish appending");
  console.log("Begin re-reading");
  fs.readFile("input.txt", finishTheProg);
  //readFile require err & data
}

function appendFile(err, data) {
  if (err) console.log(err);
  console.log(data.toString());
  console.log("Finish reading from file");
  console.log("Begin appending");
  fs.appendFile("input.txt", "Thank you", reReadingFile);
  //appendFile no data required
}
console.log("Reading from the file");

fs.readFile("input.txt", appendFile);
//readFile require err & data
