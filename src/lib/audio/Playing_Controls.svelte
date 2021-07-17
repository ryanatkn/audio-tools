<script lang="ts">
	export let playing: boolean;
	export let play: () => void;
	export let pause: () => void;
</script>

<button on:click={() => (playing ? pause() : play())} class:selected={playing}>
	{#if playing}
		⏸︎
	{:else}
		▶️
	{/if}
</button>
