var fs = require("fs");
console.log("Starting...");
fs.writeFileSync("./world.html", 
  "<html><body><h1>Hello! World.</h1></body></html>");
console.log("已建立檔案.");
