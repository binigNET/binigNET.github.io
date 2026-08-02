<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Binig.NET</title>
	<meta name="description" content="Binig.net - Private Warcraft III Server" />
</svelte:head>

<section class="flex flex-1 flex-col items-center justify-center gap-6 py-16 text-center">
	<h1 class="font-fantasy text-4xl font-bold tracking-wide text-primary sm:text-5xl">
		Welcome to Binig.NET
	</h1>
	<p class="max-w-md text-muted-foreground">
		A private Warcraft III: The Frozen Throne server. Gather your forces and battle on.
	</p>
	<div class="flex flex-wrap items-center justify-center gap-4">
		<Button href="{base}/download">Download</Button>
		<Button href="{base}/installation" variant="frame">Installation</Button>
	</div>
</section>
