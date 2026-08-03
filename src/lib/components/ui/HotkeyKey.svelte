<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let id: string;
	export let value: string;
	export let cornerLabel: string | undefined = undefined;
	export let hint: string | undefined = undefined;
	let className = '';
	export { className as class };
</script>

<div class={cn('relative', className)}>
	{#if cornerLabel}
		<span
			class="pointer-events-none absolute top-0.5 left-1 text-[9px] leading-none text-muted-foreground"
		>
			{cornerLabel}
		</span>
	{/if}
	<input
		{id}
		type="text"
		title={hint}
		{value}
		class="h-12 w-12 rounded-md border-2 border-border bg-background-elevated text-center text-xs font-semibold text-foreground uppercase shadow-[0_2px_0_0_var(--border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
		on:input
	/>
</div>
