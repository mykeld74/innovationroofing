<script lang="ts">
	import { fly } from 'svelte/transition';
	import { enhance, applyAction } from '$app/forms';
	import { contactModalOpen } from '$lib/stores/contactModal';
	import IMask from 'imask';

	const maskConfig = { mask: '(000) 000-0000' };

	interface Props {
		isInModal?: boolean;
	}

	let { isInModal = false }: Props = $props();

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let subject = $state('');
	let message = $state('');

	let submitting = $state(false);
	let showSuccess = $state(false);
	let serverError = $state('');
	let successTimer: ReturnType<typeof setTimeout> | null = null;

	let formIsValid = $state(false);
	let errors = $state({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	function clearForm() {
		firstName = '';
		lastName = '';
		email = '';
		phone = '';
		subject = '';
		message = '';
		errors = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };
		serverError = '';
	}

	function onSuccess() {
		showSuccess = true;
		if (successTimer) clearTimeout(successTimer);
		successTimer = setTimeout(() => {
			if (isInModal) {
				contactModalOpen.set(false);
				setTimeout(() => {
					showSuccess = false;
					clearForm();
				}, 200);
			} else {
				showSuccess = false;
				clearForm();
			}
		}, 3500);
	}

	function handleInput(field: keyof typeof errors) {
		errors[field] = '';
		formIsValid = true;
	}

	function handleSubmit(e: SubmitEvent) {
		const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;

		formIsValid = true;

		if (firstName.trim().length < 2) {
			formIsValid = false;
			errors.firstName = 'Please enter your first name.';
		} else {
			errors.firstName = '';
		}

		if (lastName.trim().length < 2) {
			formIsValid = false;
			errors.lastName = 'Please enter your last name.';
		} else {
			errors.lastName = '';
		}

		if (emailTest.test(email) === false) {
			formIsValid = false;
			errors.email = 'Please enter a valid email address.';
		} else {
			errors.email = '';
		}

		if (phone.trim().length < 10) {
			formIsValid = false;
			errors.phone = 'Please enter a valid phone number.';
		} else {
			errors.phone = '';
		}

		if (subject.trim().length < 3) {
			formIsValid = false;
			errors.subject = 'Please enter a subject.';
		} else {
			errors.subject = '';
		}

		if (message.trim().length < 3) {
			formIsValid = false;
			errors.message = 'Please tell us how we can help you.';
		} else {
			errors.message = '';
		}

		if (!formIsValid) {
			e.preventDefault();
			return;
		}
	}
</script>

<div class="contactFormWrap">
	<form
		method="POST"
		action="/contact"
		class="contactForm"
		novalidate
		onsubmit={handleSubmit}
		use:enhance={() => {
			submitting = true;
			serverError = '';
			return async ({ result }) => {
				submitting = false;
				if (result.type === 'success') {
					onSuccess();
				} else if (result.type === 'failure') {
					serverError =
						(result.data as { error?: string })?.error ??
						'Something went wrong. Please try again.';
				} else {
					await applyAction(result);
				}
			};
		}}
	>
		{#if showSuccess}
			<div class="successMessage">
				<svg
					class="successIcon"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<h3 class="successTitle">Message Sent!</h3>
				<p class="successText">We've received your message and will get back to you shortly.</p>
			</div>
		{:else}
			<div class="formRow">
				<div class="formGroup" class:formGroupError={!!errors.firstName}>
					<label for="firstName" class="formLabel">First Name</label>
					<input
						id="firstName"
						name="firstName"
						type="text"
						bind:value={firstName}
						required
						class="formInput"
						placeholder="Your first name"
						onfocus={() => handleInput('firstName')}
						oninput={() => handleInput('firstName')}
						aria-invalid={errors.firstName ? 'true' : 'false'}
					/>
					<div class="formErrorWrap">
						{#if errors.firstName}
							<p class="formError" transition:fly={{ y: -8, duration: 160 }}>
								{errors.firstName}
							</p>
						{/if}
					</div>
				</div>
				<div class="formGroup" class:formGroupError={!!errors.lastName}>
					<label for="lastName" class="formLabel">Last Name</label>
					<input
						id="lastName"
						name="lastName"
						type="text"
						bind:value={lastName}
						required
						class="formInput"
						placeholder="Your last name"
						onfocus={() => handleInput('lastName')}
						oninput={() => handleInput('lastName')}
						aria-invalid={errors.lastName ? 'true' : 'false'}
					/>
					<div class="formErrorWrap">
						{#if errors.lastName}
							<p class="formError" transition:fly={{ y: -8, duration: 160 }}>
								{errors.lastName}
							</p>
						{/if}
					</div>
				</div>
			</div>
			<div class="formGroup" class:formGroupError={!!errors.email}>
				<label for="email" class="formLabel">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					bind:value={email}
					required
					class="formInput"
					placeholder="you@example.com"
					onfocus={() => handleInput('email')}
					oninput={() => handleInput('email')}
					aria-invalid={errors.email ? 'true' : 'false'}
				/>
				<div class="formErrorWrap">
					{#if errors.email}
						<p class="formError" transition:fly={{ y: -8, duration: 160 }}>
							{errors.email}
						</p>
					{/if}
				</div>
			</div>
			<div class="formGroup" class:formGroupError={!!errors.phone}>
				<label for="phone" class="formLabel">Phone Number</label>
				<input
					id="phone"
					name="phone"
					type="tel"
					bind:value={phone}
					use:IMask={maskConfig}
					required
					class="formInput"
					placeholder="Your phone number"
					onfocus={() => handleInput('phone')}
					oninput={() => handleInput('phone')}
					aria-invalid={errors.phone ? 'true' : 'false'}
				/>
				<div class="formErrorWrap">
					{#if errors.phone}
						<p class="formError" transition:fly={{ y: -8, duration: 160 }}>
							{errors.phone}
						</p>
					{/if}
				</div>
			</div>
			<div class="formGroup" class:formGroupError={!!errors.subject}>
				<label for="subject" class="formLabel">Subject</label>
				<input
					id="subject"
					name="subject"
					type="text"
					bind:value={subject}
					required
					class="formInput"
					placeholder="Subject of your message"
					onfocus={() => handleInput('subject')}
					oninput={() => handleInput('subject')}
					aria-invalid={errors.subject ? 'true' : 'false'}
				/>
				<div class="formErrorWrap">
					{#if errors.subject}
						<p class="formError" transition:fly={{ y: -8, duration: 160 }}>
							{errors.subject}
						</p>
					{/if}
				</div>
			</div>
			<div class="formGroup" class:formGroupError={!!errors.message}>
				<label for="message" class="formLabel">Message</label>
				<textarea
					id="message"
					name="message"
					bind:value={message}
					required
					rows="5"
					class="formTextarea"
					placeholder="Leave us a message..."
					onfocus={() => handleInput('message')}
					oninput={() => handleInput('message')}
					aria-invalid={errors.message ? 'true' : 'false'}
				></textarea>
				<div class="formErrorWrap">
					{#if errors.message}
						<p class="formError" transition:fly={{ y: -8, duration: 160 }}>
							{errors.message}
						</p>
					{/if}
				</div>
			</div>
			<button type="submit" class="formSubmit" disabled={submitting} aria-busy={submitting}>
				{#if submitting}
					<span class="formSubmitSpinner" aria-hidden="true"></span>
					<span class="formSubmitText">Sending...</span>
				{:else}
					Send Message
				{/if}
			</button>
		{/if}
	</form>
</div>

<style>
	.contactFormWrap {
		width: 100%;
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
		transition:
			border-color var(--transition),
			box-shadow var(--transition);
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

	.formErrorWrap {
		min-height: 20px;
	}

	.formError {
		margin-top: 6px;
		font-size: 13px;
		font-weight: 500;
		color: var(--colorAccentDark);
	}

	.formGroup {
		margin-bottom: 0;
	}

	.formGroup.formGroupError {
		margin-bottom: 12px;
	}

	.formInput[aria-invalid='true'],
	.formTextarea[aria-invalid='true'] {
		border-color: var(--colorRed500);
		background: #fef2f2;
	}

	.formInput[aria-invalid='true']:focus,
	.formTextarea[aria-invalid='true']:focus {
		box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
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
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.formSubmit:hover:not(:disabled) {
		background: var(--colorAccentDark);
	}

	.formSubmit:disabled {
		opacity: 0.85;
		cursor: not-allowed;
	}

	.formSubmitSpinner {
		width: 20px;
		height: 20px;
		border: 2px solid rgba(255, 255, 255, 0.35);
		border-top-color: var(--colorWhite);
		border-radius: 50%;
		animation: formSubmitSpin 0.7s linear infinite;
	}

	.formSubmitText {
		visibility: visible;
	}

	@keyframes formSubmitSpin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (min-width: 640px) {
		.formRow {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
