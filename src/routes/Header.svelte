<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import crest from '$lib/images/crest.svg';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const links = [
		{ href: `${base}/`, label: 'binig.NET' },
		{ href: `${base}/download`, label: 'Download' },
		{ href: `${base}/installation`, label: 'Installation' },
		{ href: `${base}/config`, label: 'Config' },
		{ href: `${base}/about`, label: 'About' }
	];
</script>

<header class="bg-texture flex items-center justify-between border-b-2 border-border px-4 py-3">
	<a href="{base}/" class="flex h-8 w-8 items-center justify-center">
		<img src={crest} alt="Binig.NET" class="h-8 w-8" />
	</a>

	<nav>
		<ul class="flex items-center gap-1">
			{#each links as link}
				<li aria-current={$page.url.pathname === link.href ? 'page' : undefined}>
					<a
						href={link.href}
						class="font-fantasy relative px-3 py-2 text-xs font-semibold tracking-widest text-foreground uppercase transition hover:text-primary aria-[current=page]:text-primary"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<ThemeToggle />
</header>
