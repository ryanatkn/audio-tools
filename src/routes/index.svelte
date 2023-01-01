<script lang="ts">
	import Audio_Recording_Studio from '$lib/audio/Audio_Recording_Studio.svelte';
</script>

<main>
	<h1>audio-tools🪱</h1>
	<Audio_Recording_Studio />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		color: var(--pink);
		text-align: center;
		margin: var(--spacing_md) 0;
	}
</style>
