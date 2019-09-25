// console.log("HELLO WORLD");

// var result = 0;
// for (var i = 2; i < process.argv.length; i++) result += Number(process.argv[i]);
// console.log(result);

// var fs = require("fs");
// var data = fs.readFileSync(process.argv[2]);
// var str = data.toString().split("\n").length - 1;
// console.log(str);

// var fs = require("fs");
// fs.readFile(process.argv[2], function(err, data) {
//   if (err) throw err;
//   var str = data.toString().split("\n").length - 1;
//   console.log(str);
// });

var fs = require("fs");
var path = require("path");

var dir = process.argv[2];
var filterStr = process.argv[3];

function getFiles(dir, filterStr, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);

    list = list.filter(function(file) {
      return path.extname(file) === "." + filterStr;
    });

    callback(null, list);
  });
}

getFiles(dir, filterStr, function(err, list) {
  if (err) return console.error("There was an error:", err);

  list.forEach(function(file) {
    console.log(file);
  });
});
