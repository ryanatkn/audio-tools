<script lang="ts">
	import Recording_Controls from '$lib/audio/Recording_Controls.svelte';

	export let mic_stream: MediaStream | null = null;

	$: recording = !!mic_stream;

	let error: string | null = null;

	const start = async () => {
		error = null;
		try {
			mic_stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
		} catch (err) {
			error = `Failed to get mic input: ${err}`;
		}
	};

	const stop = () => {
		if (mic_stream) {
			for (const track of mic_stream.getTracks()) {
				console.log('stopping track', track);
				track.stop();
			}
			mic_stream = null;
		}
	};
</script>

<Recording_Controls {recording} {start} {stop}>
	{#if recording}
		turn off mic
	{:else}
		turn on mic
	{/if}
</Recording_Controls>
<!-- TODO extract a component -->
{#if error}
	<div class="error">{error}</div>
{/if}

<style>
	.error {
		color: var(--red);
	}
</style>
