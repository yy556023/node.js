var fs = require("fs");
console.log("Starting...");
fs.writeFile("./hello.html", 
  "<html><body><h1>Hello!</h1></body></html>",
  function (error) {
	  console.log("已建立檔案.");
  }
);
console.log("Finish Flag.");
