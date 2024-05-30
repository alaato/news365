"use strict";
const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, html) => {
	// create reusable transporter object using the default SMTP transport
	await new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			host: "smtp.zoho.eu",
			port: 465,
			secure: true,
			auth: {
				user: process.env.ZOHO_EMAIL,
				pass: process.env.ZOHO_PASSWORD,
			},
		});
		let mailOptions = {
			from: process.env.ZOHO_EMAIL,
			to: email,
			subject: subject,
			html: html,
		};
		console.log(mailOptions);
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				reject(err);			}
			else
				resolve(info)
			console.log('Message sent: %s', info.messageId);
		});

	});
}

module.exports = sendEmail;
