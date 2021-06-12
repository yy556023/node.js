var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'yy556023@gmail.com', // lab 3.2
		pass: 'Aaa25632563', // lab 3.2
	},
});

var mailOptions = {
	from: 'yy556023@gmail.com', // lab 3.3
	to: 'yy215308@gmail.com', // lab 3.3
	subject: 'test mail, take 1', // lab 3.5
	text: 'Mail body (Text)', // lab 3.6
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('訊息發送: ' + info.response);
	}
});
