<script lang="ts">
	import '$lib/css/reset.css';
	import '$lib/css/styles.css';
	import favicon from '$lib/assets/favicon.webp';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ContactModal from '$lib/components/ContactModal.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="siteWrapper">
	<Header />
	<main class="siteMain">
		{@render children()}
	</main>
	<Footer />
	<ContactModal />
</div>

<style>
	.siteWrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.siteMain {
		flex: 1;
	}
</style>
