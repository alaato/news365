"use strict";
import { createTransport } from "nodemailer";

const sendEmail = async (email, subject, html) => {
	const transporter = createTransport({
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
	const mailSent = await new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				resolve(false)
			}
			else {
				resolve(info)
			}
		});
	})
	console.log(mailSent)
	return mailSent? true: false;
};

export default sendEmail;
