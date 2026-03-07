<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { contactModalOpen } from '$lib/stores/contactModal';

	function closeModal() {
		contactModalOpen.set(false);
	}
</script>

{#if $contactModalOpen}
	<div
		class="modalOverlay"
		role="presentation"
		tabindex="-1"
		onclick={closeModal}
		onkeydown={(event) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				closeModal();
			}
		}}
		transition:fade={{ duration: 140 }}
	>
		<div
			class="modalDialog"
			role="dialog"
			aria-modal="true"
			tabindex="-1"
			onclick={(event) => event.stopPropagation()}
			onkeydown={(event) => {
				if (event.key === 'Escape') {
					event.stopPropagation();
					event.preventDefault();
					closeModal();
				}
			}}
			transition:scale={{ duration: 160, start: 0.96 }}
		>
			<div class="modalHeader">
				<h2 class="modalTitle">Request a Free Inspection or Estimate</h2>
				<button type="button" class="modalClose" onclick={closeModal} aria-label="Close">
					×
				</button>
			</div>
			<p class="modalSubtitle">
				Share a few details and our team will reach out to schedule your appointment.
			</p>
			<ContactForm isInModal={true} />
		</div>
	</div>
{/if}

<style>
	.modalOverlay {
		position: fixed;
		inset: 0;
		background: rgba(15, 36, 64, 0.72);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 80;
		padding: 24px;
	}

	.modalDialog {
		width: 100%;
		max-width: 640px;
		background: var(--colorWhite);
		border-radius: var(--radiusXl);
		box-shadow: var(--shadowLg);
		padding: 24px 24px 28px;
	}

	.modalHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-bottom: 8px;
	}

	.modalTitle {
		font-size: 22px;
		font-weight: 700;
		color: var(--colorPrimary);
	}

	.modalClose {
		width: 32px;
		height: 32px;
		border-radius: 999px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		line-height: 1;
		color: var(--colorTextLight);
		transition:
			background var(--transition),
			color var(--transition);
	}

	.modalClose:hover {
		background: var(--colorWarmDark);
		color: var(--colorText);
	}

	.modalSubtitle {
		margin-bottom: 16px;
		font-size: 14px;
		color: var(--colorTextLight);
	}

	@media (min-width: 640px) {
		.modalDialog {
			padding: 28px 28px 32px;
		}

		.modalTitle {
			font-size: 24px;
		}
	}
</style>
