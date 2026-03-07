/**
 * Strict HTML email template for contact form submissions.
 * Table-based layout, inline styles only — safe for Gmail, Outlook, Apple Mail, etc.
 */

export interface ContactFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

const SITE_PRIMARY = '#1a365d';
const SITE_TEXT = '#1a202c';
const SITE_TEXT_LIGHT = '#4a5568';
const SITE_BORDER = '#e2e8f0';
const SITE_WHITE = '#ffffff';

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

export function buildContactFormEmailHtml(data: ContactFormData): string {
	const firstName = escapeHtml(data.firstName);
	const lastName = escapeHtml(data.lastName);
	const email = escapeHtml(data.email);
	const phone = escapeHtml(data.phone);
	const subject = escapeHtml(data.subject);
	const message = escapeHtml(data.message).replace(/\n/g, '<br />');

	return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#edf2f7;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:${SITE_TEXT};">
	<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#edf2f7;">
		<tr>
			<td align="center" style="padding:32px 16px;">
				<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;">
					<!-- Header -->
					<tr>
						<td style="background-color:${SITE_PRIMARY};padding:24px 32px;border-radius:8px 8px 0 0;">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
								<tr>
									<td>
										<p style="margin:0;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;color:#e53e3e;">Innovation Roofing &amp; Shades</p>
										<h1 style="margin:8px 0 0 0;font-size:22px;font-weight:bold;color:${SITE_WHITE};line-height:1.2;">New Contact Form Submission</h1>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<!-- Body -->
					<tr>
						<td style="background-color:${SITE_WHITE};padding:32px;border:1px solid ${SITE_BORDER};border-top:none;border-radius:0 0 8px 8px;">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
								<tr>
									<td style="padding-bottom:16px;border-bottom:1px solid ${SITE_BORDER};">
										<p style="margin:0;font-size:12px;font-weight:bold;color:${SITE_TEXT_LIGHT};text-transform:uppercase;letter-spacing:1px;">From</p>
										<p style="margin:4px 0 0 0;font-size:16px;font-weight:bold;color:${SITE_TEXT};">${firstName} ${lastName}</p>
										<p style="margin:4px 0 0 0;font-size:14px;color:${SITE_TEXT_LIGHT};"><a href="mailto:${email}" style="color:${SITE_PRIMARY};text-decoration:none;">${email}</a></p>
										<p style="margin:4px 0 0 0;font-size:14px;color:${SITE_TEXT_LIGHT};"><a href="tel:${phone.replace(/\D/g, '')}" style="color:${SITE_PRIMARY};text-decoration:none;">${phone}</a></p>
									</td>
								</tr>
								<tr>
									<td style="padding:16px 0;border-bottom:1px solid ${SITE_BORDER};">
										<p style="margin:0;font-size:12px;font-weight:bold;color:${SITE_TEXT_LIGHT};text-transform:uppercase;letter-spacing:1px;">Subject</p>
										<p style="margin:4px 0 0 0;font-size:15px;color:${SITE_TEXT};">${subject}</p>
									</td>
								</tr>
								<tr>
									<td style="padding-top:16px;">
										<p style="margin:0;font-size:12px;font-weight:bold;color:${SITE_TEXT_LIGHT};text-transform:uppercase;letter-spacing:1px;">Message</p>
										<p style="margin:8px 0 0 0;font-size:14px;color:${SITE_TEXT};line-height:1.6;">${message}</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<!-- Footer -->
					<tr>
						<td style="padding:16px 32px;text-align:center;">
							<p style="margin:0;font-size:12px;color:${SITE_TEXT_LIGHT};">This message was sent from the contact form at Innovation Roofing &amp; Shades LLC.</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>`.trim();
}

export function buildContactFormEmailText(data: ContactFormData): string {
	return [
		'New Contact Form Submission',
		'Innovation Roofing & Shades LLC',
		'',
		'--- From ---',
		`${data.firstName} ${data.lastName}`,
		data.email,
		data.phone,
		'',
		'--- Subject ---',
		data.subject,
		'',
		'--- Message ---',
		data.message,
		'',
		'---',
		'Sent from the website contact form.'
	].join('\n');
}
