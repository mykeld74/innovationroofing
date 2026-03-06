<script lang="ts">
	import { anthonyHicks, laikaWesterlund, ianSteffen, joshNehls } from '$lib';
	const values = [
		{
			title: 'Relationships',
			description:
				"Building strong relationships with our customers is not just a priority, it's the cornerstone of our approach. Every interaction is an opportunity to cultivate trust and understanding. We prioritize active listening, empathy, and open communication to ensure that our customers feel valued and heard.",
			icon: 'people'
		},
		{
			title: 'Experience',
			description:
				'We understand that each customer interaction is an opportunity to make a lasting impression. From personalized solutions to proactive support, we strive to exceed expectations and leave a positive impact at every touchpoint.',
			icon: 'star'
		},
		{
			title: 'Accountability',
			description:
				"We take accountability seriously. We understand that our actions have a direct impact on our customers' experiences, and we hold ourselves to the highest standards of integrity and professionalism.",
			icon: 'shield'
		}
	];

	const teamMembers = [
		{
			name: 'Anthony Hicks',
			role: 'Owner/Operator',
			email: 'tony@innovationroofingllc.com',
			phone: '(480) 331-1373',
			image: anthonyHicks
		},
		{
			name: 'Laika Westerlund',
			role: 'Phoenix Project Manager',
			email: 'laika@innovationroofingllc.com',
			phone: '(520) 955-8498',
			image: laikaWesterlund
		},
		{
			name: 'Ian Steffen',
			role: 'Tucson Project Manager',
			email: 'ian@innovationroofingllc.com',
			phone: '(520) 314-7207',
			image: ianSteffen
		},
		{
			name: 'Josh Nehls',
			role: 'Tucson Project Manager',
			email: 'josh@innovationroofingllc.com',
			phone: '(520) 333-5317',
			image: joshNehls
		}
	];
</script>

<svelte:head>
	<title>About Us | Innovation Roofing</title>
	<meta
		name="description"
		content="Learn about Innovation Roofing & Shades LLC — our mission, values, and the experienced team dedicated to delivering excellence in every roofing project."
	/>
</svelte:head>

<section class="hero">
	<div class="heroInner">
		<p class="heroLabel">Who We Are</p>
		<h1 class="heroTitle">Building a Better Roofing Experience</h1>
		<p class="heroDesc">
			At Innovation Roofing & Shades LLC, our mission is to elevate the roofing industry by
			delivering excellence in every project. We are dedicated to ensuring that every customer
			receives personalized attention and the highest standard of workmanship.
		</p>
	</div>
</section>

<section class="valuesSection">
	<div class="container">
		<div class="valuesGrid">
			{#each values as value (value.title)}
				<div class="valueCard">
					<div class="valueIcon">
						<svg
							class="valueIconSvg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							{#if value.icon === 'people'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							{:else if value.icon === 'star'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
								/>
							{:else}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
								/>
							{/if}
						</svg>
					</div>
					<h3 class="valueTitle">{value.title}</h3>
					<p class="valueDesc">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="approachSection">
	<div class="container">
		<div class="approachContent">
			<h2 class="sectionTitle">Our Approach</h2>
			<p class="approachText">
				Our approach is centered on creating a seamless and stress-free experience, from initial
				consultation to project completion. By prioritizing quality, innovation, and customer
				satisfaction, we aim to set a new benchmark for roofing services.
			</p>
		</div>
	</div>
</section>

<section class="teamSection">
	<div class="container">
		<div class="sectionHeaderCenter">
			<h2 class="sectionTitle">Our Team</h2>
			<p class="sectionSub">Dedication. Expertise. Passion.</p>
			<p class="sectionDesc">
				We're a dynamic group of individuals dedicated to our craft. With diverse backgrounds and
				expertise, we bring a wealth of knowledge and skills to the table.
			</p>
		</div>

		<div class="teamGrid">
			{#each teamMembers as member (member.email)}
				<div class="teamCard">
					<div class="teamAvatar">
						<img src={member.image} alt={member.name} />
					</div>
					<h3 class="teamName">{member.name}</h3>
					<p class="teamRole">{member.role}</p>
					<div class="teamContact">
						<a href="mailto:{member.email}" class="teamLink">{member.email}</a>
						<a href="tel:{member.phone.replace(/[^0-9]/g, '')}" class="teamLink">{member.phone}</a>
					</div>
				</div>
			{/each}
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

	.valuesSection {
		padding: 80px 0;
		background: var(--colorWhite);
	}

	.valuesGrid {
		display: grid;
		gap: 32px;
	}

	.valueCard {
		border: 1px solid var(--colorBorderLight);
		border-radius: var(--radiusXl);
		padding: 32px;
		box-shadow: var(--shadow);
		transition: box-shadow var(--transition);
	}

	.valueCard:hover {
		box-shadow: var(--shadowMd);
	}

	.valueIcon {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(26, 54, 93, 0.1);
		border-radius: var(--radiusLg);
		color: var(--colorPrimary);
	}

	.valueIconSvg {
		width: 24px;
		height: 24px;
	}

	.valueTitle {
		margin-top: 20px;
		font-size: 20px;
		font-weight: 700;
		color: var(--colorText);
	}

	.valueDesc {
		margin-top: 12px;
		line-height: 1.7;
		color: var(--colorTextLight);
	}

	.approachSection {
		padding: 80px 0;
		background: var(--colorWarm);
	}

	.approachContent {
		max-width: 720px;
		margin: 0 auto;
		text-align: center;
	}

	.sectionTitle {
		font-size: 36px;
		font-weight: 700;
		color: var(--colorPrimary);
	}

	.approachText {
		margin-top: 24px;
		font-size: 18px;
		line-height: 1.7;
		color: var(--colorTextLight);
	}

	.teamSection {
		padding: 80px 0;
		background: var(--colorWhite);
	}

	.sectionHeaderCenter {
		text-align: center;
		margin-bottom: 56px;
	}

	.sectionSub {
		margin-top: 8px;
		font-size: 18px;
		font-weight: 500;
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

	.teamGrid {
		display: grid;
		gap: 32px;
	}

	.teamCard {
		border: 1px solid var(--colorBorderLight);
		border-radius: var(--radiusXl);
		background: var(--colorWhite);
		padding: 24px;
		text-align: center;
		box-shadow: var(--shadow);
		transition: box-shadow var(--transition);
	}

	.teamCard:hover {
		box-shadow: var(--shadowMd);
	}

	.teamAvatar {
		width: 150px;

		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--colorPrimary);
		color: var(--colorWhite);
		font-size: 24px;
		font-weight: 700;
		border-radius: 50%;
		overflow: hidden;
	}

	.teamName {
		margin-top: 16px;
		font-size: 18px;
		font-weight: 700;
		color: var(--colorText);
	}

	.teamRole {
		font-size: 14px;
		font-weight: 500;
		color: var(--colorAccent);
	}

	.teamContact {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.teamLink {
		font-size: 14px;
		color: var(--colorTextMuted);
		transition: color var(--transition);
	}

	.teamLink:hover {
		color: var(--colorPrimary);
	}

	@media (min-width: 768px) {
		.valuesGrid {
			grid-template-columns: repeat(3, 1fr);
		}

		.teamGrid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.heroTitle {
			font-size: 48px;
		}

		.teamGrid {
			grid-template-columns: repeat(4, 1fr);
		}

		.sectionTitle {
			font-size: 40px;
		}
	}
</style>
