<script>
	// SvelteKit/Vite behavior makes this to look out of order, is reverse-cascade
	import '$lib/ui/style.css'; // overrides for the next import
	import '@feltcoop/felt/ui/style.css'; // overrode by previous import
</script>

<svelte:head>
	<link rel="icon" href="favicon.png" />
</svelte:head>

<slot />
