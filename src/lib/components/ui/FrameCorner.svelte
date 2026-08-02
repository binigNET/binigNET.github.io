<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let position: 'tl' | 'tr' | 'br' | 'bl' = 'tl';
	let className = '';
	export { className as class };

	const rotation: Record<typeof position, string> = {
		tl: 'rotate-0',
		tr: 'rotate-90',
		br: 'rotate-180',
		bl: '-rotate-90'
	};

	const placement: Record<typeof position, string> = {
		tl: 'top-0 left-0',
		tr: 'top-0 right-0',
		br: 'bottom-0 right-0',
		bl: 'bottom-0 left-0'
	};
</script>

<svg
	viewBox="0 0 100 100"
	fill="none"
	aria-hidden="true"
	class={cn(
		'pointer-events-none absolute h-6 w-6 text-primary',
		placement[position],
		rotation[position],
		className
	)}
>
	<circle cx="4" cy="4" r="5" fill="currentColor" />
	<path d="M4 4 H40 M4 4 V40" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
	<path d="M40 4 q8 0 8 8" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
	<path d="M4 40 q0 8 8 8" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
</svg>
