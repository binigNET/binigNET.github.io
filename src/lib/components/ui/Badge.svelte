<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let variant: 'default' | 'secondary' | 'outline' = 'default';
	let className = '';
	export { className as class };

	const variants = {
		default: 'border border-border bg-primary text-primary-foreground',
		secondary: 'border border-border bg-background-elevated text-foreground',
		outline: 'border border-border bg-transparent text-foreground'
	};
</script>

<span
	class={cn(
		'font-fantasy inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase',
		variants[variant],
		className
	)}
>
	<slot />
</span>
