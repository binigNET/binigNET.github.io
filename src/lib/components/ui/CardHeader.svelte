<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let className = '';
	export { className as class };
</script>

<div class={cn('flex flex-col gap-1 p-5 pb-0', className)}>
	<slot />
</div>
