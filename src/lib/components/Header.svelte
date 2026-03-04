<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/logo.webp';
	import { contactModalOpen } from '$lib/stores/contactModal';

	let mobileMenuOpen = $state(false);
	let scrollY = $state(0);
	const needsFallback =
		typeof CSS !== 'undefined' ? !CSS.supports('animation-timeline', 'scroll()') : true;
	let isHeaderCompact = $derived(scrollY > 30);

	const navLinks = [
		{ href: '/about-us', label: 'About Us' },
		{ href: '/our-projects', label: 'Our Projects' },
		{ href: '/faqs-testimonials', label: 'FAQs & Testimonials' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function openContactModal() {
		contactModalOpen.set(true);
		mobileMenuOpen = false;
	}
</script>

<svelte:window onscroll={needsFallback ? () => (scrollY = window.scrollY) : undefined} />

<header class="header" class:headerCompact={needsFallback && isHeaderCompact}>
	<div class="headerInner">
		<a href="/" class="logo" onclick={closeMobileMenu}>
			<div class="logoIcon">
				<img src={logo} alt="Innovation Roofing & Shades LLC" />
			</div>
		</a>

		<nav class="desktopNav">
			{#each navLinks as link (link.href)}
				<a href={link.href} class="navLink" class:navLinkActive={isActive(link.href)}>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="headerActions">
			<a href="tel:4803311373" class="phoneLink">(480) 331-1373</a>
			<button type="button" class="btnInspection" onclick={openContactModal}>
				Free Inspection
			</button>
		</div>

		<button
			class="menuToggle"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
		>
			<svg class="menuIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				{#if mobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	{#if mobileMenuOpen}
		<div class="mobileMenu">
			<nav class="mobileNav">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						onclick={closeMobileMenu}
						class="mobileNavLink"
						class:navLinkActive={isActive(link.href)}
					>
						{link.label}
					</a>
				{/each}
				<div class="mobileActions">
					<a href="tel:4803311373" class="mobilePhone">(480) 331-1373</a>
					<button type="button" onclick={openContactModal} class="mobileCta">
						Free Inspection
					</button>
				</div>
			</nav>
		</div>
	{/if}
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--colorWhite);
		border-bottom: 1px solid var(--colorBorderLight);
		box-shadow: var(--shadow);
	}

	.headerInner {
		max-width: var(--maxWidth);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 24px;
		transition: padding var(--transition);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.logoIcon {
		width: 140px;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: width var(--transition);
	}

	/* JS fallback for browsers without scroll-driven animations (Firefox) */
	.headerCompact .headerInner {
		padding: 4px 24px;
	}

	.headerCompact .logoIcon {
		width: 80px;
	}

	/* Scroll-driven animations for supporting browsers */
	@supports (animation-timeline: scroll()) {
		@keyframes shrinkHeader {
			from {
				padding-top: 16px;
				padding-bottom: 16px;
			}
			to {
				padding-top: 4px;
				padding-bottom: 4px;
			}
		}

		@keyframes shrinkLogo {
			from {
				width: 140px;
			}
			to {
				width: 80px;
			}
		}

		.headerInner {
			animation: shrinkHeader linear both;
			animation-timeline: scroll();
			animation-range: 0px 100px;
		}

		.logoIcon {
			animation: shrinkLogo linear both;
			animation-timeline: scroll();
			animation-range: 0px 100px;
		}
	}

	.desktopNav {
		display: none;
		align-items: center;
		gap: 4px;
	}

	.navLink {
		padding: 8px 14px;
		font-size: 14px;
		font-weight: 500;
		color: var(--colorTextLight);
		border-radius: 6px;
		transition: all var(--transition);
	}

	.navLink:hover {
		background: var(--colorWarm);
		color: var(--colorPrimary);
	}

	.navLinkActive {
		background: rgba(26, 54, 93, 0.1);
		color: var(--colorPrimary);
	}

	.headerActions {
		display: none;
		align-items: center;
		gap: 16px;
	}

	.phoneLink {
		font-size: 14px;
		font-weight: 600;
		color: var(--colorPrimary);
	}

	.btnInspection {
		padding: 10px 20px;
		background: var(--colorAccent);
		color: var(--colorWhite);
		font-size: 14px;
		font-weight: 600;
		border-radius: var(--radius);
		transition: background var(--transition);
	}

	.btnInspection:hover {
		background: var(--colorAccentDark);
	}

	.menuToggle {
		padding: 8px;
		color: var(--colorTextLight);
		border-radius: 6px;
		transition: background var(--transition);
	}

	.menuToggle:hover {
		background: var(--colorWarm);
	}

	.menuIcon {
		width: 24px;
		height: 24px;
	}

	.mobileMenu {
		border-top: 1px solid var(--colorBorderLight);
		background: var(--colorWhite);
	}

	.mobileNav {
		display: flex;
		flex-direction: column;
		padding: 12px 16px;
	}

	.mobileNavLink {
		padding: 10px 14px;
		font-size: 14px;
		font-weight: 500;
		color: var(--colorTextLight);
		border-radius: 6px;
		transition: all var(--transition);
	}

	.mobileNavLink:hover {
		background: var(--colorWarm);
	}

	.mobileActions {
		margin-top: 12px;
		padding-top: 12px;
		border-top: 1px solid var(--colorBorderLight);
	}

	.mobilePhone {
		display: block;
		padding: 8px 14px;
		font-size: 14px;
		font-weight: 600;
		color: var(--colorPrimary);
	}

	.mobileCta {
		display: block;
		margin-top: 8px;
		padding: 10px 20px;
		background: var(--colorAccent);
		color: var(--colorWhite);
		font-size: 14px;
		font-weight: 600;
		border-radius: var(--radius);
		text-align: center;
	}

	@media (min-width: 1024px) {
		.desktopNav {
			display: flex;
		}

		.headerActions {
			display: flex;
		}

		.menuToggle {
			display: none;
		}

		.mobileMenu {
			display: none;
		}
	}
</style>
