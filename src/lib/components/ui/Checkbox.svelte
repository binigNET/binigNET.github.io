<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let checked = false;
	export let id: string | undefined = undefined;
	export let disabled = false;
	let className = '';
	export { className as class };
</script>

<label
	for={id}
	class={cn('flex items-start gap-2 text-sm text-foreground', disabled && 'opacity-50', className)}
>
	<input
		{id}
		{disabled}
		type="checkbox"
		bind:checked
		class="mt-0.5 h-4 w-4 shrink-0 rounded border border-border bg-transparent accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
		on:change
	/>
	<span><slot /></span>
</label>
