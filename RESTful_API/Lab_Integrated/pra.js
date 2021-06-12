var fs = require('fs');

var x = fs.readFileSync('./public/index.html');

fs.writeFile('./index.txt', x, function (err) {
	if (err) {
		console.log(err.toString());
	}
});
