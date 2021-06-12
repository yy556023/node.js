var fs = require('fs');

fs.writeFile('test.txt', 'sex', function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('sucessful to writeFile');
    }
})