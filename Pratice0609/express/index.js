var express = require('express');
var fs = require('fs');
var host = '127.0.0.1';
var port = 80;
var server = express();

server.get('/:who', function (req, res) {
    req.params.who = "sex";
    res.send(req.params.who.toString());
})

server.listen(port, host, function (err) {
    if (err) {
        console.log(err.toString());
    }
    else {
        console.log('link success');
    }
});
