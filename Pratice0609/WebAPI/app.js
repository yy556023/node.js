var express = require('express');
var fs = require('fs');
var sql = require('mssql/msnodesqlv8');
var app = express();

var bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Web 伺服器的靜態檔案置於 public 資料夾
app.use(express.static('public'));

// 以 express-session 管理狀態資訊
var session = require('express-session');
app.use(
	session({
		secret: 'secretKey',
		resave: false,
		saveUninitialized: true,
	})
);

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/view');

app.listen(80);

const config = {
	driver: 'msnodesqlv8',
	server: 'localhost',
	port: 1433,
	trustServerCertificate: true,
	database: 'NewsDb',
	// user:'sa',
	// password:'Pa$$w0rd',
	options: {
		trustedConnection: true,
		instance: 'sqlexpress',
	},
};

app.get('/fuck', async function (req, res) {
    await sql.connect(config);
    var st = req.params.number;
    const cmd = await sql.query('select * from news');
    res.send((JSON.stringify(cmd.recordset)));
})

app.post('/fuck', async function (req, res) {
    await sql.connect(config);
    const cmd = await sql.query(`insert into news (title, ymd) values (
		'${req.body.title}',
		'${req.body.ymd}'
		)`);
    res.send('mother fucker');

})