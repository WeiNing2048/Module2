var fs = require("fs");

console.log("Reading from the file");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  console.log("Finish Reading from file");
  console.log("Begin appending");
  fs.appendFile("input.txt", "Thank you", err => {
    if (err) throw err;
    console.log("Finish appending");
    console.log("Re-reading from file");
    fs.readFile("input.txt", (err, data) => {
      if (err) throw err;
      console.log(data.toString());
      console.log("Finish Re-reading");
    });
  });
});
