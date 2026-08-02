<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let className = '';
	export { className as class };
</script>

<div class={cn('flex items-center gap-2 p-5 pt-0', className)}>
	<slot />
</div>
