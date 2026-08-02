<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<button
	type="button"
	class="flex h-8 w-8 items-center justify-center rounded border border-border text-primary transition hover:brightness-110"
	on:click={() => theme.toggle()}
	aria-label="Toggle color theme"
>
	{#if $theme === 'dark'}
		<svg
			viewBox="0 0 24 24"
			width="16"
			height="16"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
			/>
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
			<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
		</svg>
	{/if}
</button>
