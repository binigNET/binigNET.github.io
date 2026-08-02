<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
		<slot />
	</main>

	<footer class="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
		<p>All rights reserved &copy; BINIG.NET {new Date().getFullYear()}</p>
	</footer>
</div>
