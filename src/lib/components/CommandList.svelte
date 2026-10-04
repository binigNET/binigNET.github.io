<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import { contextLabels, type BotCommand, type CommandContext } from '$lib/data/bot-commands';

	export let commands: BotCommand[];

	const contextClasses: Record<CommandContext, string> = {
		lobby: 'border-rarity-rare text-rarity-rare',
		game: 'border-rarity-legendary text-rarity-legendary',
		any: 'border-rarity-epic text-rarity-epic',
		anywhere: 'text-muted-foreground'
	};

	let copied: string | null = null;
	let copiedTimer: ReturnType<typeof setTimeout>;

	async function copy(name: string) {
		try {
			await navigator.clipboard.writeText(`!${name}`);
		} catch {
			return;
		}
		copied = name;
		clearTimeout(copiedTimer);
		copiedTimer = setTimeout(() => (copied = null), 1500);
	}
</script>

<ul class="flex flex-col divide-y divide-border/50">
	{#each commands as cmd (cmd.name)}
		<li class="flex flex-col gap-1.5 py-3 first:pt-0 last:pb-0">
			<div class="flex flex-wrap items-center gap-2">
				<button
					type="button"
					on:click={() => copy(cmd.name)}
					title="Copy !{cmd.name}"
					class="rounded font-mono text-base font-bold text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
				>
					!{cmd.name}
				</button>
				{#if copied === cmd.name}
					<span class="text-xs text-muted-foreground" aria-live="polite">Copied</span>
				{/if}
				{#each cmd.aliases ?? [] as alias}
					<span
						class="rounded border border-border/60 px-1.5 font-mono text-xs text-muted-foreground"
					>
						!{alias}
					</span>
				{/each}
				<span class="ml-auto flex gap-1.5">
					{#if cmd.verified}
						<Badge variant="secondary">Verified</Badge>
					{/if}
					<Badge variant="outline" class={contextClasses[cmd.context]}>
						{contextLabels[cmd.context]}
					</Badge>
				</span>
			</div>
			<p class="text-sm text-foreground">{cmd.description}</p>
			{#if cmd.syntax}
				<code
					class="self-start rounded bg-background px-1.5 py-0.5 font-mono text-xs text-foreground"
				>
					!{cmd.syntax}
				</code>
			{/if}
			{#if cmd.note}
				<p class="text-xs text-muted-foreground">{cmd.note}</p>
			{/if}
		</li>
	{/each}
</ul>
