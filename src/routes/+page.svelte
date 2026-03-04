<script lang="ts">
	const services = [
		{ name: 'Roof Installations & Replacements', icon: 'install' },
		{ name: 'Roof Repairs & Maintenance', icon: 'repair' },
		{ name: 'Insurance Claim Experts', icon: 'shield' },
		{ name: 'Shingle & Tile Roofing', icon: 'tile' },
		{ name: 'Metal Roofing Systems', icon: 'metal' },
		{ name: 'GAF & IKO Product Sales', icon: 'tag' },
		{ name: 'Eagle Roofing Tiles', icon: 'star' },
		{ name: 'Flat Roof Recoating', icon: 'paint' }
	];
	import { residentialRoofing, commercialRoofing, masterElite } from '$lib';
</script>

<svelte:head>
	<title>Innovation Roofing | Your Trusted Roofing Partner in Tucson & Phoenix</title>
	<meta
		name="description"
		content="Innovation Roofing & Shades LLC provides expert residential and commercial roofing services in the greater Tucson and Phoenix areas."
	/>
</svelte:head>

<section class="hero">
	<div class="heroOverlay"></div>
	<div class="heroContent">
		<p class="heroLabel">Serving Greater Tucson & Phoenix</p>
		<h1 class="heroTitle">Your Trusted Roofing Partner</h1>
		<p class="heroQuote">"From Roof to Service, We've Got You Covered"</p>
		<p class="heroDesc">
			Professional roofing solutions for residential and commercial properties. Quality
			craftsmanship backed by experience you can trust.
		</p>
		<div class="heroActions">
			<a href="/contact" class="btnPrimary">Get a Free Inspection</a>
			<a href="tel:4803311373" class="btnOutline">Call (480) 331-1373</a>
		</div>
	</div>
</section>

<section class="quality">
	<div class="container">
		<div class="sectionHeader">
			<h2 class="sectionTitle">Experience Quality Roofing</h2>
			<p class="sectionSub">Innovation Roofing & Shades LLC: Your Roofing Experts</p>
		</div>

		<div class="cardGrid">
			<div class="card">
				<div class="cardImage">
					<img src={residentialRoofing} alt="Residential Roofing" />
				</div>
				<div class="cardBody">
					<h3 class="cardTitle">Residential Roofing</h3>
					<p class="cardText">
						Your home deserves the best protection, and that starts with a reliable roof. Our
						residential roofing services are designed to enhance the safety, durability, and
						aesthetic appeal of your home. From roof installations to repairs, we prioritize
						customer satisfaction in every project we undertake.
					</p>
					<a href="/contact" class="cardLink">
						Request a Quote
						<svg
							class="cardLinkIcon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>

			<div class="card">
				<div class="cardImage">
					<img src={commercialRoofing} alt="Commercial Roofing" />
				</div>
				<div class="cardBody">
					<h3 class="cardTitle">Commercial Roofing</h3>
					<p class="cardText">
						We specialize in providing top-notch roofing solutions for commercial properties. Our
						expert team is dedicated to delivering high-quality workmanship and exceptional service,
						ensuring that your commercial roofing needs are met with precision and care.
					</p>
					<a href="/contact" class="cardLink">
						Request a Quote
						<svg
							class="cardLinkIcon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="servicesSection">
	<div class="container">
		<div class="sectionHeader">
			<h2 class="sectionTitle">Our Roofing Services</h2>
			<p class="sectionSub">We Offer a Range of Services to Meet Your Needs</p>
			<p class="sectionDesc">
				We take pride in our personalized approach and attention to detail, aiming to exceed
				expectations with every project we undertake.
			</p>
		</div>

		<div class="servicesGrid">
			{#each services as service (service.name)}
				<div class="serviceCard">
					<div class="serviceIcon">
						<svg
							class="serviceIconSvg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							{#if service.icon === 'install'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
								/>
							{:else if service.icon === 'repair'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
								/>
							{:else if service.icon === 'shield'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
								/>
							{:else if service.icon === 'tile'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
								/>
							{:else if service.icon === 'metal'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							{:else if service.icon === 'tag'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
								/>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
							{:else if service.icon === 'star'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
								/>
							{:else}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
								/>
							{/if}
						</svg>
					</div>
					<h3 class="serviceName">{service.name}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="masterElite">
	<div class="container">
		<div class="masterEliteInner">
			<div class="masterEliteLogoWrap">
				<img src={masterElite} alt="GAF Master Elite contractor badge" class="masterEliteLogo" />
			</div>
			<div class="masterEliteContent">
				<h2 class="masterEliteTitle">GAF Master Elite® Contractor</h2>
				<p class="masterEliteText">
					Being recognized as a GAF Master Elite® contractor reflects our commitment to quality
					installations, ongoing training, and industry-leading standards for residential roofing.
				</p>
				<div class="masterEliteLinks">
					<a
						href="/MASTER_ELITE_CERTIFICATE.pdf"
						target="_blank"
						rel="noreferrer"
						class="btnPrimary masterEliteBtn"
					>
						View Certificate
					</a>
					<a
						href="/MASTER_ELITE_REFERENCE_LETTER.pdf"
						target="_blank"
						rel="noreferrer"
						class="btnPrimary masterEliteBtn"
					>
						Reference Letter
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="cta">
	<div class="container">
		<h2 class="ctaTitle">Ready to Get Started?</h2>
		<p class="ctaText">
			Contact us today for a free roof inspection and quote. Our team is ready to provide you with
			the best roofing solutions for your property.
		</p>
		<div class="ctaActions">
			<a href="/contact" class="btnPrimary">Contact Us Today</a>
			<a href="tel:4803311373" class="btnOutlineLight">(480) 331-1373</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		background: url('../lib/assets/heroBg.webp') no-repeat center / cover;
		overflow: hidden;
	}

	.heroOverlay {
		position: absolute;
		inset: 0;
		background: var(--colorPrimary);
		background-size: cover;
		background-position: center;
		opacity: 0.7;
	}

	.heroContent {
		position: relative;
		max-width: var(--maxWidth);
		margin: 0 auto;
		padding: 96px 24px;
		max-width: 640px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 24px;
		padding-right: 24px;
	}

	.heroLabel {
		font-size: 13px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--colorAccentLight);
		margin-bottom: 16px;
	}

	.heroTitle {
		font-size: 48px;
		font-weight: 800;
		color: var(--colorWhite);
		line-height: 1.1;
	}

	.heroQuote {
		margin-top: 16px;
		font-size: 18px;
		font-style: italic;
		color: #a0aec0;
	}

	.heroDesc {
		margin-top: 24px;
		font-size: 18px;
		line-height: 1.7;
		color: #cbd5e0;
		max-width: 520px;
	}

	.heroActions {
		margin-top: 32px;
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}

	.btnPrimary {
		display: inline-block;
		padding: 14px 32px;
		background: var(--colorAccent);
		color: var(--colorWhite);
		font-size: 16px;
		font-weight: 600;
		border-radius: var(--radius);
		box-shadow: var(--shadowLg);
		transition: background var(--transition);
	}

	.btnPrimary:hover {
		background: var(--colorAccentDark);
	}

	.btnOutline {
		display: inline-block;
		padding: 14px 32px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		color: var(--colorWhite);
		font-size: 16px;
		font-weight: 600;
		border-radius: var(--radius);
		transition: all var(--transition);
	}

	.btnOutline:hover {
		border-color: var(--colorWhite);
		background: rgba(255, 255, 255, 0.1);
	}

	.btnOutlineLight {
		display: inline-block;
		padding: 14px 32px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		color: var(--colorWhite);
		font-size: 16px;
		font-weight: 600;
		border-radius: var(--radius);
		transition: all var(--transition);
	}

	.btnOutlineLight:hover {
		border-color: var(--colorWhite);
		background: rgba(255, 255, 255, 0.1);
	}

	.quality {
		padding: 80px 0;
		background: var(--colorWhite);
	}

	.sectionHeader {
		text-align: center;
		margin-bottom: 48px;
	}

	.sectionTitle {
		font-size: 36px;
		font-weight: 700;
		color: var(--colorPrimary);
	}

	.sectionSub {
		margin-top: 8px;
		font-size: 18px;
		color: var(--colorTextMuted);
	}

	.sectionDesc {
		margin-top: 16px;
		font-size: 16px;
		color: var(--colorTextLight);
		max-width: 640px;
		margin-left: auto;
		margin-right: auto;
	}

	.cardGrid {
		display: grid;
		gap: 32px;
	}

	.card {
		border: 1px solid var(--colorBorderLight);
		border-radius: var(--radiusXl);
		overflow: hidden;
		box-shadow: var(--shadow);
		transition: box-shadow var(--transition);
	}

	.card:hover {
		box-shadow: var(--shadowMd);
	}

	.cardImage {
		width: 100%;
		aspect-ratio: 7 / 4;
		overflow: hidden;
		transition: transform 500ms ease;
	}

	.cardBody {
		padding: 32px;
	}

	.cardTitle {
		font-size: 24px;
		font-weight: 700;
		color: var(--colorPrimary);
	}

	.cardText {
		margin-top: 12px;
		line-height: 1.7;
		color: var(--colorTextLight);
	}

	.cardLink {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-top: 24px;
		font-size: 14px;
		font-weight: 600;
		color: var(--colorAccent);
		transition: color var(--transition);
	}

	.cardLink:hover {
		color: var(--colorAccentDark);
	}

	.cardLinkIcon {
		width: 16px;
		height: 16px;
	}

	.servicesSection {
		padding: 80px 0;
		background: var(--colorWarm);
	}

	.servicesGrid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 24px;
	}

	.serviceCard {
		background: var(--colorWhite);
		border: 1px solid var(--colorBorderLight);
		border-radius: var(--radiusLg);
		padding: 24px;
		text-align: center;
		box-shadow: var(--shadow);
		transition: all var(--transition);
	}

	.serviceCard:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadowMd);
	}

	.serviceIcon {
		width: 56px;
		height: 56px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(26, 54, 93, 0.1);
		border-radius: var(--radiusLg);
		color: var(--colorPrimary);
	}

	.serviceIconSvg {
		width: 28px;
		height: 28px;
	}

	.serviceName {
		margin-top: 16px;
		font-size: 15px;
		font-weight: 600;
		color: var(--colorText);
	}

	.masterElite {
		padding: 72px 0;
		background: var(--colorWhite);
		border-top: 1px solid var(--colorBorderLight);
		border-bottom: 1px solid var(--colorBorderLight);
	}

	.masterEliteInner {
		display: grid;
		gap: 32px;
		align-items: center;
	}

	.masterEliteLogoWrap {
		display: flex;
		justify-content: center;
	}

	.masterEliteLogo {
		max-width: 320px;
		height: auto;
		display: block;
	}

	.masterEliteContent {
		text-align: center;
	}

	.masterEliteTitle {
		font-size: 28px;
		font-weight: 700;
		color: var(--colorPrimary);
	}

	.masterEliteText {
		margin-top: 16px;
		font-size: 16px;
		color: var(--colorTextLight);
		max-width: 640px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.7;
	}

	.masterEliteLinks {
		margin-top: 24px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
	}

	.masterEliteBtn {
		min-width: 190px;
	}

	.masterEliteBtnSecondary {
		min-width: 210px;
	}

	.cta {
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
		max-width: 640px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.7;
	}

	.ctaActions {
		margin-top: 32px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
	}

	@media (min-width: 640px) {
		.heroTitle {
			font-size: 56px;
		}
	}

	@media (min-width: 768px) {
		.cardGrid {
			grid-template-columns: 1fr 1fr;
		}

		.servicesGrid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.heroContent {
			max-width: var(--maxWidth);
			padding: 128px 24px;
		}

		.heroTitle {
			font-size: 64px;
		}

		.sectionTitle {
			font-size: 40px;
		}
	}
</style>
