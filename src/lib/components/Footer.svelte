<script lang="ts">
	import innovationLogo from '$lib/assets/logoWhite.webp';
</script>

<footer class="footer">
	<div class="footerInner">
		<div class="footerGrid">
			<div class="footerBrand">
				<div class="footerLogo">
					<img src={innovationLogo} alt="Innovation Roofing & Shades LLC" />
				</div>
			</div>

			<div class="footerContact">
				<h3 class="footerHeading">Contact Info</h3>
				<ul class="footerContactList">
					<li class="footerContactItem">
						<svg
							class="footerIcon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
						<span>10029 E Janice Way<br />Scottsdale, AZ 85260</span>
					</li>
					<li class="footerContactItem">
						<svg
							class="footerIcon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
							/>
						</svg>
						<a href="tel:4803311373" class="footerLink">(480) 331-1373</a>
					</li>
					<li class="footerContactItem">
						<svg
							class="footerIcon"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						<a href="mailto:info@innovationroofingllc.com" class="footerLink"
							>info@innovationroofingllc.com</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="footerBottom">
			<p>&copy; {new Date().getFullYear()} Innovation Roofing LLC. All Rights Reserved.</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--colorPrimaryDark);
		color: #a0aec0;
	}

	.footerInner {
		max-width: var(--maxWidth);
		margin: 0 auto;
		padding: 64px 24px;
	}

	.footerGrid {
		display: grid;
		gap: 48px;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'logo contact';

		align-items: center;
	}

	.footerLogo {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 16px;
		grid-area: logo;
	}

	.footerLogoIcon {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.1);
		color: var(--colorWhite);
		font-size: 14px;
		font-weight: 700;
		border-radius: var(--radius);
	}

	.footerLogoName {
		display: block;
		font-size: 18px;
		font-weight: 700;
		color: var(--colorWhite);
		line-height: 1.2;
	}

	.footerLogoTag {
		display: block;
		font-size: 11px;
		color: #718096;
		letter-spacing: 0.5px;
	}

	.footerDesc {
		font-size: 14px;
		line-height: 1.7;
		color: #718096;
		margin-top: 16px;
	}

	.footerHeading {
		font-size: 13px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--colorWhite);
		margin-bottom: 16px;
	}

	.footerList {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.footerLink {
		font-size: 14px;
		transition: color var(--transition);
	}

	.footerLink:hover {
		color: var(--colorWhite);
	}
	.footerContact {
		grid-area: contact;
		justify-self: end;
		align-self: start;
	}

	.footerContactList {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.footerContactItem {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		font-size: 14px;
	}

	.footerIcon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
		margin-top: 2px;
		color: var(--colorAccentLight);
	}

	.footerBottom {
		margin-top: 48px;
		padding-top: 32px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		text-align: center;
		font-size: 14px;
		color: #718096;
	}
</style>
