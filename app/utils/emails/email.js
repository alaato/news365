import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(to, subject, html) {
	const { data, error } = await resend.emails.send({
		from: 'News365 <onboarding@resend.dev>',
		to: to,
		subject: subject,
		html: html
	});
	if (error) {
		console.log(error);
		return (false);
	}
	else {
		console.log(data)
		return (true)
	}
}

export default sendEmail
