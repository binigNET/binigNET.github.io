<script context="module" lang="ts">
	export const inputClass =
		'rounded border border-border bg-background-elevated px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
</script>

<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let label: string;
	export let id: string;
	export let hint: string | undefined = undefined;
	let className = '';
	export { className as class };
</script>

<div class={cn('flex flex-col gap-1', className)}>
	<label
		for={id}
		class="font-fantasy text-xs font-semibold tracking-wide text-muted-foreground uppercase"
	>
		{label}
	</label>
	<slot />
	{#if hint}
		<p class="text-xs text-muted-foreground">{hint}</p>
	{/if}
</div>
