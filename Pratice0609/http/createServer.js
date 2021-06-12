var http = require('http');
var fs = require('fs');
console.log('starting');
var host = '127.0.0.1';
var port = 80;
var server = http.createServer(function (req, res) {
	console.log('got a request:' + req.url);
	fs.readFile('.' + req.url, function (err, data) {
		if (err) {
			res.writeHead(404, { 'content-type': 'text/plain' });
			res.end(err.toString());
		} else {
			res.writeHead(200, { 'content-type': 'text/html' });
			res.end(data);
		}
	});
});

server.listen(port, host, function () {
	console.log('kis');
});
