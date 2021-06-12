var express = require('express');
var app = express();
app.listen(3000);
console.log('Server is running');
//localhost:3000
app.get('/', function (req, res) {
  res.send('Hello!');
});

app.get('/hi/:who', function (req, res) {
  res.send('Hello!' + req.params.who);
});
