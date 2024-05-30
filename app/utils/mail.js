"use strict";
const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, html) => {
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
	await new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				reject(error)
			}
			else{
				console.log('Message sent: %s', info.messageId);
				resolve(info)
			}
		});
	})
};

module.exports = sendEmail;
