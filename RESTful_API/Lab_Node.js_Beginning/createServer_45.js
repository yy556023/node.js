console.log("Starting...");
var fs = require("fs");
var host = "127.0.0.1";
var port = 80;
var express = require("express");

var app = express();

app.get("/", function (request, response) {
	response.send("hello!");
});

app.get("/hello/:text", function (request, response) {
	response.send("Hello! " + request.params.text);
});

app.listen(port, host);
