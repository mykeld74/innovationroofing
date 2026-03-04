<script lang="ts">
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
	}
</script>

<svelte:head>
	<title>Contact | Innovation Roofing</title>
	<meta
		name="description"
		content="Get in touch with Innovation Roofing & Shades LLC. Request a free roof inspection, ask questions, or schedule a consultation."
	/>
</svelte:head>

<section class="hero">
	<div class="heroInner">
		<p class="heroLabel">Get In Touch</p>
		<h1 class="heroTitle">Contact Us</h1>
		<p class="heroDesc">
			Have questions? Reach out to us using the form below or give us a call. We're here to help
			with all your roofing needs.
		</p>
	</div>
</section>

<section class="contactSection">
	<div class="container">
		<div class="contactGrid">
			<div class="contactInfo">
				<h2 class="contactInfoTitle">Get in Touch</h2>
				<p class="contactInfoDesc">
					Whether you need a free inspection, have questions about our services, or want to discuss
					your roofing project, we're just a call or message away.
				</p>

				<div class="infoList">
					<div class="infoItem">
						<div class="infoIcon">
							<svg class="infoIconSvg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
							</svg>
						</div>
						<div>
							<p class="infoLabel">Main Office</p>
							<p class="infoValue">10029 E Janice Way<br />Scottsdale, AZ 85260</p>
						</div>
					</div>

					<div class="infoItem">
						<div class="infoIcon">
							<svg class="infoIconSvg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
							</svg>
						</div>
						<div>
							<p class="infoLabel">Phone</p>
							<a href="tel:4803311373" class="infoLink">(480) 331-1373</a>
						</div>
					</div>

					<div class="infoItem">
						<div class="infoIcon">
							<svg class="infoIconSvg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
							</svg>
						</div>
						<div>
							<p class="infoLabel">Email</p>
							<a href="mailto:info@innovationroofingllc.com" class="infoLink">info@innovationroofingllc.com</a>
						</div>
					</div>
				</div>
			</div>

			<div class="contactFormWrap">
				<form onsubmit={handleSubmit} class="contactForm">
					{#if submitted}
						<div class="successMessage">
							<svg class="successIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<h3 class="successTitle">Message Sent!</h3>
							<p class="successText">We've received your message and will get back to you shortly.</p>
						</div>
					{:else}
						<div class="formRow">
							<div class="formGroup">
								<label for="firstName" class="formLabel">First Name</label>
								<input
									id="firstName"
									type="text"
									bind:value={firstName}
									required
									class="formInput"
									placeholder="Your first name"
								/>
							</div>
							<div class="formGroup">
								<label for="lastName" class="formLabel">Last Name</label>
								<input
									id="lastName"
									type="text"
									bind:value={lastName}
									required
									class="formInput"
									placeholder="Your last name"
								/>
							</div>
						</div>
						<div class="formGroup">
							<label for="email" class="formLabel">Email Address</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								required
								class="formInput"
								placeholder="you@example.com"
							/>
						</div>
						<div class="formGroup">
							<label for="subject" class="formLabel">Subject</label>
							<input
								id="subject"
								type="text"
								bind:value={subject}
								required
								class="formInput"
								placeholder="Subject of your message"
							/>
						</div>
						<div class="formGroup">
							<label for="message" class="formLabel">Message</label>
							<textarea
								id="message"
								bind:value={message}
								required
								rows="5"
								class="formTextarea"
								placeholder="Leave us a message..."
							></textarea>
						</div>
						<button type="submit" class="formSubmit">Send Message</button>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		background: var(--colorPrimary);
		padding: 80px 0;
	}

	.heroInner {
		max-width: 720px;
		margin: 0 auto;
		text-align: center;
		padding: 0 24px;
	}

	.heroLabel {
		font-size: 13px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--colorAccentLight);
	}

	.heroTitle {
		margin-top: 12px;
		font-size: 40px;
		font-weight: 800;
		color: var(--colorWhite);
		line-height: 1.1;
	}

	.heroDesc {
		margin-top: 24px;
		font-size: 18px;
		line-height: 1.7;
		color: #a0aec0;
	}

	.contactSection {
		padding: 80px 0;
		background: var(--colorWhite);
	}

	.contactGrid {
		display: grid;
		gap: 48px;
	}

	.contactInfoTitle {
		font-size: 24px;
		font-weight: 700;
		color: var(--colorText);
	}

	.contactInfoDesc {
		margin-top: 12px;
		line-height: 1.7;
		color: var(--colorTextLight);
	}

	.infoList {
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.infoItem {
		display: flex;
		align-items: flex-start;
		gap: 16px;
	}

	.infoIcon {
		width: 44px;
		height: 44px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(26, 54, 93, 0.1);
		border-radius: var(--radius);
		color: var(--colorPrimary);
	}

	.infoIconSvg {
		width: 20px;
		height: 20px;
	}

	.infoLabel {
		font-weight: 600;
		color: var(--colorText);
	}

	.infoValue {
		margin-top: 4px;
		font-size: 14px;
		color: var(--colorTextLight);
	}

	.infoLink {
		display: block;
		margin-top: 4px;
		font-size: 14px;
		color: var(--colorTextLight);
		transition: color var(--transition);
	}

	.infoLink:hover {
		color: var(--colorPrimary);
	}

	.contactForm {
		border: 1px solid var(--colorBorderLight);
		border-radius: var(--radiusXl);
		background: var(--colorWhite);
		padding: 32px;
		box-shadow: var(--shadow);
	}

	.successMessage {
		text-align: center;
		padding: 24px;
		background: var(--colorGreen50);
		border-radius: var(--radius);
	}

	.successIcon {
		width: 48px;
		height: 48px;
		margin: 0 auto;
		color: var(--colorGreen500);
	}

	.successTitle {
		margin-top: 12px;
		font-size: 18px;
		font-weight: 600;
		color: var(--colorGreen700);
	}

	.successText {
		margin-top: 4px;
		font-size: 14px;
		color: var(--colorGreen500);
	}

	.formRow {
		display: grid;
		gap: 20px;
		margin-bottom: 20px;
	}

	.formGroup {
		margin-bottom: 20px;
	}

	.formRow .formGroup {
		margin-bottom: 0;
	}

	.formLabel {
		display: block;
		font-size: 14px;
		font-weight: 500;
		color: var(--colorTextLight);
		margin-bottom: 6px;
	}

	.formInput,
	.formTextarea {
		width: 100%;
		padding: 12px 16px;
		border: 1px solid var(--colorBorder);
		border-radius: var(--radius);
		font-size: 14px;
		color: var(--colorText);
		transition: border-color var(--transition), box-shadow var(--transition);
		outline: none;
	}

	.formInput:focus,
	.formTextarea:focus {
		border-color: var(--colorPrimary);
		box-shadow: 0 0 0 3px rgba(26, 54, 93, 0.15);
	}

	.formTextarea {
		resize: none;
	}

	.formSubmit {
		width: 100%;
		padding: 14px 24px;
		background: var(--colorAccent);
		color: var(--colorWhite);
		font-size: 16px;
		font-weight: 600;
		border-radius: var(--radius);
		transition: background var(--transition);
	}

	.formSubmit:hover {
		background: var(--colorAccentDark);
	}

	@media (min-width: 640px) {
		.formRow {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1024px) {
		.heroTitle {
			font-size: 48px;
		}

		.contactGrid {
			grid-template-columns: 2fr 3fr;
		}
	}
</style>
