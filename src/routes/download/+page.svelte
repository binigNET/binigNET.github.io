<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import CardHeader from '$lib/components/ui/CardHeader.svelte';
	import CardTitle from '$lib/components/ui/CardTitle.svelte';
	import CardFooter from '$lib/components/ui/CardFooter.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const downloads = [
		{
			label: 'Warcraft III TFT Client + WC3Loader + AHT Hotkeys',
			href: 'https://drive.google.com/file/d/1pK0bnm20Y-pF8PfeEjXXJcOAv4SWGvXM/view?usp=sharing',
			size: '1.48GB'
		},
		{
			label: 'Warcraft III Loader (WC3Loader)',
			href: 'https://drive.google.com/file/d/1EG9krw_1WwkUBeFLXhCuebIv1z7gi0zL/view?usp=sharing',
			size: '73KB'
		},
		{
			label: 'Gateway Installer',
			href: 'https://drive.google.com/file/d/1hM8oZgKlY3T_AZDH-qcqnnVXUPRcGqLv/view?usp=sharing',
			size: '7KB'
		},
		{
			label: 'AHT Hotkey',
			href: 'https://drive.google.com/file/d/1BwcmvLwwscgj2XePgh6aSXQhjJGSuKvU/view?usp=sharing',
			size: '243KB'
		}
	];
</script>

<svelte:head>
	<title>Download</title>
	<meta name="description" content="Download the Binig.NET Warcraft III client and tools" />
</svelte:head>

<div class="mx-auto flex max-w-2xl flex-col gap-6">
	<h1 class="font-fantasy text-3xl font-bold text-primary">Download</h1>

	<div class="flex flex-col gap-4">
		{#each downloads as item}
			<Card>
				<CardHeader class="flex-row items-center justify-between gap-3">
					<CardTitle class="text-base">{item.label}</CardTitle>
					<Badge variant="secondary">{item.size}</Badge>
				</CardHeader>
				<CardFooter>
					<Button href={item.href} target="_blank" rel="noopener noreferrer">Download</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>

	<h2 class="font-fantasy mt-4 text-xl font-semibold text-primary">Special Thanks</h2>
	<p class="text-sm text-foreground">
		<a target="_blank" rel="noopener noreferrer" href="https://harpywar.com/">HarpyWar</a> for
		<strong>PVPGN</strong>, <strong>WC3Loader</strong>, and
		<strong>Universal Battle.net Gateway Installer</strong>
	</p>
	<p class="text-sm text-foreground">
		<a target="_blank" rel="noopener noreferrer" href="https://aht.auct.eu/">aht.auct.eu</a> for AHT
		Hotkey
	</p>
</div>
