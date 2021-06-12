var http = require("http");
console.log("Starting...");
var host = "127.0.0.1";
var port = 8080;
var server = http.createServer( function (request, response) {
	console.log("Got a request: " + request.url);
	response.writeHead(200, {"Content-type": "text/plain"});
	response.end("Hello! I'm a Node.JS server.");
});

server.listen(port, host, function () {
	console.log("Listening...");
});
