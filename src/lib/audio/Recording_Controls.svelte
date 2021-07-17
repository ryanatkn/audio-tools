<script lang="ts">
	export let recording: boolean; // TODO probably change this to `Async_Status`
	export let start: () => void;
	export let stop: () => void;
</script>

<button on:click={() => (recording ? stop() : start())} class:selected={recording}>
	<div class="icon">
		🎙️
		{#if !recording}
			<div class="off">❌</div>
		{/if}
	</div>
	<slot />
</button>

<style>
	.icon {
		position: relative;
	}
	.off {
		position: absolute;
		left: 0;
		top: 0;
		opacity: var(--faded_3);
	}
</style>
