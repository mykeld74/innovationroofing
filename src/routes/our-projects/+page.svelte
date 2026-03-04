<script lang="ts">
	import { flatRoofRecoat, tileRoof, asphaltShingles } from '$lib';
	const projects = [
		{
			title: 'Flat Roof Recoat',
			description:
				"A flat roof recoat project that involved thoroughly cleaning the existing surface, repairing minor cracks, and applying a high-quality elastomeric coating to extend the roof's lifespan and improve energy efficiency. Recoats provide a seamless, weather-resistant barrier that helps protect the property from sun and water damage.",
			image: flatRoofRecoat
		},
		{
			title: 'Tile Roofing Project',
			description:
				'A tile roof job that involved removing and replacing the underlayment while carefully reinstalling the original tiles for a refreshed, durable finish. The project included replacing damaged wood, upgrading the flashings, and ensuring proper ventilation to extend the life of the roof.',
			image: tileRoof
		},
		{
			title: 'Asphalt Shingle Project',
			description:
				'An asphalt shingle roof replacement where we removed the old, worn shingles and installed a new, high-performance roofing system designed for durability and curb appeal. The job included upgrading the underlayment, replacing any damaged decking, and installing ridge vents for improved airflow.',
			image: asphaltShingles
		}
	];
</script>

<svelte:head>
	<title>Our Projects | Innovation Roofing</title>
	<meta
		name="description"
		content="Explore Innovation Roofing's recent projects — from flat roof recoats to tile and asphalt shingle installations across Southern Arizona."
	/>
</svelte:head>

<section class="hero">
	<div class="heroInner">
		<p class="heroLabel">Portfolio</p>
		<h1 class="heroTitle">Our Projects</h1>
		<p class="heroDesc">
			At Innovation Roofing, our projects highlight the quality, care, and craftsmanship we bring to
			every job. Explore our recent work to see how we combine industry expertise with personalized
			service.
		</p>
	</div>
</section>

<section class="projectsSection">
	<div class="container">
		{#each projects as project, i (project.title)}
			<div class="projectRow" class:projectRowReversed={i % 2 !== 0}>
				<div class="projectImageWrap">
					<div class="projectImage">
						<img src={project.image} alt={project.title} />
					</div>
				</div>
				<div class="projectContent">
					<span class="projectNumber">{String(i + 1).padStart(2, '0')}</span>
					<h2 class="projectTitle">{project.title}</h2>
					<p class="projectDesc">{project.description}</p>
					<a href="/contact" class="projectLink">
						Get a Similar Quote
						<svg
							class="projectLinkIcon"
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
		{/each}
	</div>
</section>

<section class="ctaSection">
	<div class="container">
		<h2 class="ctaTitle">Have a Project in Mind?</h2>
		<p class="ctaText">
			Let us bring the same level of quality and care to your roof. Contact us for a free inspection
			and estimate.
		</p>
		<a href="/contact" class="ctaBtn">Start Your Project</a>
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

	.projectsSection {
		padding: 80px 0;
		background: var(--colorWhite);
	}

	.projectRow {
		display: grid;
		gap: 40px;
		align-items: center;
		margin-bottom: 80px;
	}

	.projectRow:last-child {
		margin-bottom: 0;
	}

	.projectImageWrap {
		overflow: hidden;
		border-radius: var(--radiusXl);
		box-shadow: var(--shadowLg);
	}

	.projectImage {
		img {
			width: 100%;
			height: auto;
		}
	}

	.projectNumber {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 4px 16px;
		background: rgba(26, 54, 93, 0.1);
		color: var(--colorPrimary);
		font-size: 14px;
		font-weight: 600;
		border-radius: 999px;
	}

	.projectTitle {
		margin-top: 16px;
		font-size: 30px;
		font-weight: 700;
		color: var(--colorText);
	}

	.projectDesc {
		margin-top: 16px;
		font-size: 18px;
		line-height: 1.7;
		color: var(--colorTextLight);
	}

	.projectLink {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-top: 24px;
		font-size: 14px;
		font-weight: 600;
		color: var(--colorAccent);
		transition: color var(--transition);
	}

	.projectLink:hover {
		color: var(--colorAccentDark);
	}

	.projectLinkIcon {
		width: 16px;
		height: 16px;
	}

	.ctaSection {
		padding: 64px 0;
		background: var(--colorWarm);
		text-align: center;
	}

	.ctaTitle {
		font-size: 36px;
		font-weight: 700;
		color: var(--colorPrimary);
	}

	.ctaText {
		margin-top: 16px;
		font-size: 18px;
		color: var(--colorTextLight);
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

	@media (min-width: 1024px) {
		.heroTitle {
			font-size: 48px;
		}

		.projectRow {
			grid-template-columns: 1fr 1fr;
		}

		.projectRowReversed {
			direction: rtl;
		}

		.projectRowReversed > * {
			direction: ltr;
		}
	}
</style>
