<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import CardHeader from '$lib/components/ui/CardHeader.svelte';
	import CardTitle from '$lib/components/ui/CardTitle.svelte';
	import CardContent from '$lib/components/ui/CardContent.svelte';
	import CardFooter from '$lib/components/ui/CardFooter.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Installation</title>
	<meta
		name="description"
		content="How to install and connect to the Binig.NET Warcraft III server"
	/>
</svelte:head>

<div class="mx-auto flex max-w-2xl flex-col gap-6">
	<h1 class="font-fantasy text-3xl font-bold text-primary">Installation</h1>

	<Card>
		<CardHeader>
			<CardTitle>Requirements</CardTitle>
		</CardHeader>
		<CardContent class="flex flex-wrap gap-2">
			<Badge>Warcraft III: The Frozen Throne (v1.26a)</Badge>
			<Badge>Warcraft III Loader</Badge>
			<Badge>Configured BNET Gateway</Badge>
		</CardContent>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>If you don't have Warcraft III installed</CardTitle>
		</CardHeader>
		<CardContent class="text-sm text-foreground">
			<p>
				Download the pre-packaged client below, which includes <strong>Warcraft III Loader</strong>
				and <strong>AHT Hotkeys</strong>.
			</p>
		</CardContent>
		<CardFooter>
			<Button
				href="https://drive.google.com/file/d/1pK0bnm20Y-pF8PfeEjXXJcOAv4SWGvXM/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			>
				Download client
			</Button>
		</CardFooter>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>If you already have Warcraft III installed</CardTitle>
		</CardHeader>
		<CardContent class="flex flex-col gap-2 text-sm text-foreground">
			<!-- placeholder steps — replace with real gateway/realm connection details -->
			<p>1. Install <strong>Warcraft III Loader</strong>.</p>
			<p>
				2. Configure your <strong>BNET Gateway</strong> to point to the Binig.NET server address.
			</p>
			<p>3. Launch Warcraft III through WC3Loader and log in to play.</p>
		</CardContent>
	</Card>
</div>
