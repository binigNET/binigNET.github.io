<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let className = '';
	export { className as class };
</script>

<h3 class={cn('font-fantasy text-lg font-semibold text-primary', className)}>
	<slot />
</h3>
