<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import CardHeader from '$lib/components/ui/CardHeader.svelte';
	import CardTitle from '$lib/components/ui/CardTitle.svelte';
	import CardDescription from '$lib/components/ui/CardDescription.svelte';
	import CardContent from '$lib/components/ui/CardContent.svelte';
	import { inputClass } from '$lib/components/ui/Field.svelte';
	import CommandList from '$lib/components/CommandList.svelte';
	import { cn } from '$lib/utils/cn';
	import {
		botCommands,
		categories,
		type BotCommand,
		type CommandContext
	} from '$lib/data/bot-commands';

	type Filter = 'all' | 'lobby' | 'game' | 'anywhere';

	const filters: { id: Filter; label: string }[] = [
		{ id: 'all', label: 'All' },
		{ id: 'lobby', label: 'Lobby' },
		{ id: 'game', label: 'In game' },
		{ id: 'anywhere', label: 'Anywhere' }
	];

	// "any"/"anywhere" cmds also work in lobby + game
	const filterContexts: Record<Filter, CommandContext[]> = {
		all: ['lobby', 'game', 'any', 'anywhere'],
		lobby: ['lobby', 'any', 'anywhere'],
		game: ['game', 'any', 'anywhere'],
		anywhere: ['anywhere']
	};

	let query = '';
	let filter: Filter = 'all';
	let ownerOpen = false;

	function matches(cmd: BotCommand, q: string, f: Filter) {
		if (!filterContexts[f].includes(cmd.context)) return false;
		if (!q) return true;
		return [cmd.name, ...(cmd.aliases ?? []), cmd.description, cmd.note ?? ''].some((s) =>
			s.toLowerCase().includes(q)
		);
	}

	$: q = query.trim().toLowerCase().replace(/^!/, '');
	$: groups = categories
		.map((cat) => ({
			...cat,
			commands: botCommands.filter((c) => c.category === cat.id && matches(c, q, filter))
		}))
		.filter((g) => g.commands.length > 0);
	$: if (q || filter !== 'all') ownerOpen = true;
</script>

<svelte:head>
	<title>Bot Commands</title>
	<meta name="description" content="Chat commands for the Binig.NET hosting bot" />
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="flex flex-col gap-2">
		<h1 class="font-fantasy text-3xl font-bold text-primary">Bot Commands</h1>
		<p class="text-sm text-muted-foreground">
			Type in lobby or game chat, prefixed with <code class="text-foreground">!</code>, e.g.
			<code class="text-foreground">!ready</code>. Click a command to copy it. Commands marked
			<em>Verified</em> need a verified account: whisper <code class="text-foreground">sc</code> to the
			bot on Battle.net.
		</p>
	</div>

	<div
		class="sticky top-0 z-10 -mx-4 flex flex-col gap-3 border-b border-border bg-background px-4 py-3 sm:flex-row sm:items-center"
	>
		<label for="cmd-search" class="visually-hidden">Search commands</label>
		<input
			id="cmd-search"
			type="search"
			placeholder="Search commands…"
			bind:value={query}
			class={cn(inputClass, 'w-full sm:max-w-xs')}
		/>
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filter by where command works">
			{#each filters as f}
				<button
					type="button"
					aria-pressed={filter === f.id}
					on:click={() => (filter = f.id)}
					class="font-fantasy rounded-full border border-border px-3 py-1 text-xs font-semibold tracking-wide text-foreground uppercase transition hover:text-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
				>
					{f.label}
				</button>
			{/each}
		</div>
	</div>

	{#each groups as group (group.id)}
		<Card>
			{#if group.id === 'owner'}
				<details class="group" bind:open={ownerOpen}>
					<summary class="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
						<CardHeader class="pb-5">
							<CardTitle class="flex items-center gap-2">
								<span class="text-xs transition group-open:rotate-90">▶</span>
								{group.title}
								<span class="text-sm text-muted-foreground">({group.commands.length})</span>
							</CardTitle>
							<CardDescription>{group.description}</CardDescription>
						</CardHeader>
					</summary>
					<CardContent class="pt-0">
						<CommandList commands={group.commands} />
					</CardContent>
				</details>
			{:else}
				<CardHeader>
					<CardTitle>{group.title}</CardTitle>
					<CardDescription>{group.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<CommandList commands={group.commands} />
				</CardContent>
			{/if}
		</Card>
	{:else}
		<p class="py-8 text-center text-sm text-muted-foreground">No commands match.</p>
	{/each}
</div>
