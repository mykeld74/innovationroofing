<script lang="ts">
	import { slide } from 'svelte/transition';

	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	const faqs = [
		{
			question: 'How do I know if my roof needs repair or replacement?',
			answer:
				"Signs include missing or damaged shingles, leaks, sagging areas, visible wear, or if your roof is over 20 years old. We offer free inspections to assess your roof's condition and recommend the best course of action."
		},
		{
			question: 'Do you offer free roof inspections?',
			answer:
				'Yes! We provide complimentary roof inspections to evaluate the current condition of your roof and identify any potential issues. Contact us to schedule yours.'
		},
		{
			question: 'What types of roofing materials do you work with?',
			answer:
				'We work with a wide variety of roofing materials including asphalt shingles, tile, metal roofing, and flat roof systems. We are also authorized dealers for GAF, IKO, and Eagle Roofing products.'
		},
		{
			question: 'Can you help with insurance claims?',
			answer:
				'Absolutely. Our team has extensive experience working with insurance companies and can guide you through the entire claims process, from initial assessment to final repair or replacement.'
		},
		{
			question: 'How long does a typical roof replacement take?',
			answer:
				"Most residential roof replacements can be completed in 1-3 days, depending on the size and complexity of the project. We'll provide a detailed timeline during your consultation."
		},
		{
			question: 'What areas do you serve?',
			answer:
				'We proudly serve the greater Tucson and Phoenix metropolitan areas, including Scottsdale, Mesa, Chandler, Tempe, Marana, Oro Valley, and surrounding communities.'
		}
	];

	const testimonials = [
		{
			name: 'Elizabeth Cavazos',
			location: '',
			text: 'I cannot express the Relief and Gratitude I have experienced with Innovation Roofing & Shades. Petra and her Team are Top Notch. From Start to Finish every detail was handled with Professionalism and Patience. The pictures of before and after speak for themselves. The quality of work is way above expectations. I am also having more work done through Innovation because they are a Company that delivers exactly what they. First three photos are Before, next three are After... Quality Workmanship is what Innovation offers and delivers. Thank You Petra Thank All involved.'
		},
		{
			name: 'Leslie Hobbs',
			location: '',
			text: 'Leo from Innovation Roofing was amazing!!! He did a fantastic job! They were so quick to respond and come to give us an estimate. The workmanship was top notch and was done quickly and left our house clean and looking beautiful! Thank you Leo and team for all your help! 100% recommend to anyone!!!'
		},
		{
			name: 'Neyva Rodriguez',
			location: '',
			text: 'We had a great experience with Petra from Innovation Roofing and Shades. From start to finish, the owner was incredibly responsive and always available to answer our questions. Her customer service was great — she took the time to explain every detail thoroughly, especially for my parents who only speak Spanish. They truly appreciated her patience and clear communication. The whole process was smooth and professional, and we felt confident and informed every step of the way. We highly recommend this company to anyone looking for reliable and attentive roofing services!'
		}
	];

	function getInitials(name: string): string {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('');
	}
</script>

<svelte:head>
	<title>FAQs & Testimonials | Innovation Roofing</title>
	<meta
		name="description"
		content="Find answers to common roofing questions and read what our customers have to say about Innovation Roofing & Shades LLC."
	/>
</svelte:head>

<section class="hero">
	<div class="heroInner">
		<p class="heroLabel">Questions & Reviews</p>
		<h1 class="heroTitle">FAQs & Testimonials</h1>
		<p class="heroDesc">
			Get answers to common questions and hear from customers who trust Innovation Roofing for their
			homes and businesses.
		</p>
	</div>
</section>

<section class="faqSection">
	<div class="faqContainer">
		<h2 class="sectionTitle">Frequently Asked Questions</h2>
		<div class="faqList">
			{#each faqs as faq, i (faq.question)}
				<div class="faqItem">
					<button class="faqQuestion" onclick={() => toggleFaq(i)}>
						<span class="faqQuestionText">{faq.question}</span>
						<svg
							class="faqChevron"
							class:faqChevronOpen={openFaq === i}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if openFaq === i}
						<div class="faqAnswer" transition:slide>
							<p>{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="testimonialSection">
	<div class="container">
		<h2 class="sectionTitle sectionTitleCenter">What Our Customers Say</h2>
		<div class="testimonialGrid">
			{#each testimonials as testimonial (testimonial.name)}
				<div class="testimonialCard">
					<div class="stars">
						{#each { length: 5 } as _, starIndex (starIndex)}
							<svg class="starIcon" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						{/each}
					</div>
					<p class="testimonialText">"{testimonial.text}"</p>
					<div class="testimonialAuthor">
						<div class="authorAvatar">{getInitials(testimonial.name)}</div>
						<div>
							<p class="authorName">{testimonial.name}</p>
							<p class="authorLocation">{testimonial.location}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="ctaSection">
	<div class="container">
		<h2 class="ctaTitle">Still Have Questions?</h2>
		<p class="ctaText">
			Our team is here to help. Reach out for a free consultation and let us address your roofing
			concerns.
		</p>
		<a href="/contact" class="ctaBtn">Contact Us</a>
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

	.faqSection {
		padding: 80px 0;
		background: var(--colorWhite);
	}

	.faqContainer {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.sectionTitle {
		font-size: 36px;
		font-weight: 700;
		color: var(--colorPrimary);
		text-align: center;
	}

	.sectionTitleCenter {
		margin-bottom: 48px;
	}

	.faqList {
		margin-top: 48px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.faqItem {
		border: 1px solid var(--colorBorder);
		border-radius: var(--radiusLg);
		background: var(--colorWhite);
		overflow: hidden;
	}

	.faqQuestion {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 24px;
		text-align: left;
		font-size: 16px;
		font-weight: 600;
		color: var(--colorText);
	}

	.faqQuestionText {
		padding-right: 16px;
	}

	.faqChevron {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
		color: var(--colorTextMuted);
		transition: transform var(--transition);
	}

	.faqChevronOpen {
		transform: rotate(180deg);
	}

	.faqAnswer {
		padding: 0 24px 20px;
		border-top: 1px solid var(--colorBorderLight);
		padding-top: 16px;
	}

	.faqAnswer p {
		line-height: 1.7;
		color: var(--colorTextLight);
	}

	.testimonialSection {
		padding: 80px 0;
		background: var(--colorWarm);
	}

	.testimonialGrid {
		display: grid;
		gap: 32px;
	}

	.testimonialCard {
		background: var(--colorWhite);
		border: 1px solid var(--colorBorderLight);
		border-radius: var(--radiusXl);
		padding: 32px;
		box-shadow: var(--shadow);
	}

	.stars {
		display: flex;
		gap: 4px;
		color: #f6ad55;
	}

	.starIcon {
		width: 20px;
		height: 20px;
	}

	.testimonialText {
		margin-top: 16px;
		line-height: 1.7;
		color: var(--colorTextLight);
		font-style: italic;
	}

	.testimonialAuthor {
		margin-top: 24px;
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.authorAvatar {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--colorPrimary);
		color: var(--colorWhite);
		font-size: 14px;
		font-weight: 700;
		border-radius: 50%;
	}

	.authorName {
		font-size: 14px;
		font-weight: 600;
		color: var(--colorText);
	}

	.authorLocation {
		font-size: 12px;
		color: var(--colorTextMuted);
	}

	.ctaSection {
		padding: 64px 0;
		background: var(--colorPrimary);
		text-align: center;
	}

	.ctaTitle {
		font-size: 36px;
		font-weight: 700;
		color: var(--colorWhite);
	}

	.ctaText {
		margin-top: 16px;
		font-size: 18px;
		color: #a0aec0;
	}

	.ctaBtn {
		display: inline-block;
		margin-top: 32px;
		padding: 14px 32px;
		background: var(--colorAccent);
		color: var(--colorWhite);
		font-size: 16px;
		font-weight: 600;
		border-radius: var(--radius);
		box-shadow: var(--shadowLg);
		transition: background var(--transition);
	}

	.ctaBtn:hover {
		background: var(--colorAccentDark);
	}

	@media (min-width: 768px) {
		.testimonialGrid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.heroTitle {
			font-size: 48px;
		}
	}
</style>
