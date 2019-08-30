var http = require("http");
var toUpper = require("to-upper");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" }); //if someone connect as a website
    res.end(toUpper("Hello Node!")); //return "Hello Node"
  })
  .listen(8080);

console.log("Server started on localhost:8080; Jom try");

//create a new folder - mkdir (name of new folder)
//Go into that new folder - cd (name of the folder):change directory
//npm init (to declare this folder is a node js project)
//npm install x y z (install module x y and z) (install in current folder)
//(create your index.js)
//node index.js
//nodemon index.js

//npm install -g <a module>(this install globally, when download application into PC)
//create exe1.js then input.txt
//nodemon exe1.js
