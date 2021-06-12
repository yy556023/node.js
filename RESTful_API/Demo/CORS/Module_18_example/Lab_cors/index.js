// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );

// 一切就緒，開始接受用戶端連線
// app.listen(process.env.PORT);
app.listen(80);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("鍵盤「Ctrl + C」可結束伺服器程式.");

// ---------------

app.get("/hello/:text", function (request, response) {
	response.send("Hello! " + request.params.text);
});
