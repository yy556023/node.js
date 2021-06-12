console.log("Starting...");
var fs = require("fs");
var host = "127.0.0.1";
var port = 80;
var express = require("express");
const { resolve } = require("path/posix");
var app = express();

app.get("/:who", function (request, response) {
	request.params.who = "index.html";
	response.send("hello!");
});

app.listen(port, host);
