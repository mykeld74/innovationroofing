import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';
import {
	buildContactFormEmailHtml,
	buildContactFormEmailText,
	type ContactFormData
} from '$lib/email/contactFormEmail';

const TO_EMAIL = 'mike@bigbearded.dev';

function getTransporter() {
	const user = env.GOOGLE_EMAIL;
	const pass = env.GOOGLE_EMAIL_PASSWORD?.replace(/\s/g, '');
	const host = env.MAIL_HOST ?? 'smtp.gmail.com';
	const port = parseInt(env.MAIL_PORT ?? '587', 10);

	if (!user || !pass) {
		throw new Error('Missing GOOGLE_EMAIL or GOOGLE_EMAIL_PASSWORD in environment');
	}

	return nodemailer.createTransport({
		host,
		port,
		secure: port === 465,
		auth: { user, pass }
	});
}

function parseFormData(formData: FormData): ContactFormData {
	return {
		firstName: (formData.get('firstName') as string)?.trim() ?? '',
		lastName: (formData.get('lastName') as string)?.trim() ?? '',
		email: (formData.get('email') as string)?.trim() ?? '',
		phone: (formData.get('phone') as string)?.trim() ?? '',
		subject: (formData.get('subject') as string)?.trim() ?? '',
		message: (formData.get('message') as string)?.trim() ?? ''
	};
}

function validate(data: ContactFormData): string | null {
	const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;
	if (data.firstName.length < 2) return 'Please enter your first name.';
	if (data.lastName.length < 2) return 'Please enter your last name.';
	if (!emailTest.test(data.email)) return 'Please enter a valid email address.';
	if (data.phone.length < 10) return 'Please enter a valid phone number.';
	if (data.subject.length < 3) return 'Please enter a subject.';
	if (data.message.length < 3) return 'Please tell us how we can help you.';
	return null;
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = parseFormData(formData);

		const validationError = validate(data);
		if (validationError) {
			return fail(400, { success: false, error: validationError });
		}

		try {
			const transporter = getTransporter();
			const from = env.GOOGLE_EMAIL as string;

			await transporter.sendMail({
				from: `"Innovation Roofing Contact" <${from}>`,
				to: TO_EMAIL,
				replyTo: data.email,
				subject: `Contact form: ${data.subject}`,
				text: buildContactFormEmailText(data),
				html: buildContactFormEmailHtml(data)
			});

			return { success: true };
		} catch (err) {
			console.error('Contact form email error:', err);
			return fail(500, {
				success: false,
				error: 'We could not send your message. Please try again or call us at (480) 331-1373.'
			});
		}
	}
};
