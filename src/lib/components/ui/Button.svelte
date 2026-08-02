<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'default' | 'frame' = 'default';
	export let href: string | undefined = undefined;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	let className = '';
	export { className as class };

	const base =
		'font-fantasy relative inline-flex items-center justify-center gap-2 rounded px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition hover:brightness-110 active:scale-95 active:brightness-75 active:shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50';

	const variants = {
		default: 'border border-border bg-primary text-primary-foreground',
		frame: 'border-2 border-border bg-transparent text-primary'
	};
</script>

{#if href}
	<a {href} class={cn(base, variants[variant], className)} {...$$restProps} on:click>
		<slot />
	</a>
{:else}
	<button {type} class={cn(base, variants[variant], className)} {...$$restProps} on:click>
		<slot />
	</button>
{/if}
