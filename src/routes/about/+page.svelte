<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import CardHeader from '$lib/components/ui/CardHeader.svelte';
	import CardTitle from '$lib/components/ui/CardTitle.svelte';
	import CardContent from '$lib/components/ui/CardContent.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Binig.NET, a private Warcraft III server" />
</svelte:head>

<div class="mx-auto flex max-w-2xl flex-col gap-6">
	<h1 class="font-fantasy text-3xl font-bold text-primary">About Binig.NET</h1>

	<Card>
		<CardHeader>
			<CardTitle>Our story</CardTitle>
		</CardHeader>
		<CardContent class="flex flex-col gap-3 text-sm text-foreground">
			<p>
				Binig.NET is a small private Warcraft III: The Frozen Throne server, run by players who grew
				up on the original Battle.net and wanted a place to keep playing classic maps and custom
				games.
			</p>
			<p>
				<!-- placeholder copy — replace with real server history, ruleset, and community links -->
				More details about the server's rules and community are coming soon.
			</p>
		</CardContent>
	</Card>
</div>
