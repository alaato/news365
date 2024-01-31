"use strict";
const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, html) => {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.eu",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.ZOHO_EMAIL,
          pass: process.env.ZOHO_PASSWORD,
        },
      });
    
    var mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: email,
      subject: subject,
      html: html,
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return throwError(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
    
};

module.exports = sendEmail;
