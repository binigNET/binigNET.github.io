<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import FrameCorner from './FrameCorner.svelte';

	let className = '';
	export { className as class };
</script>

<div class={cn('bg-texture relative rounded-lg border border-border', className)}>
	<FrameCorner position="tl" />
	<FrameCorner position="tr" />
	<FrameCorner position="bl" />
	<FrameCorner position="br" />
	<slot />
</div>
