<script lang="ts">
	import type {Input_Channel_Store} from '$lib/audio/input_channel';
	import Volume_Controls from '$lib/audio/Volume_Controls.svelte';
	import Pan_Controls from '$lib/audio/Pan_Controls.svelte';
	import type {Input_Source_Store} from '$lib/audio/input_source';
	import Oscillator_Source_Controls from '$lib/audio/Oscillator_Source_Controls.svelte';
	import Mic_Source_Controls from '$lib/audio/Mic_Source_Controls.svelte';

	export let input_channel: Input_Channel_Store;
	export let remove: (() => void) | null = null;

	let input_source: Input_Source_Store | null;
	$: input_source = $input_channel.source;
</script>

<div class="item">
	<input
		type="text"
		class="name"
		value={$input_channel.name}
		on:input={(e) => input_channel.set_name(e.currentTarget.value)}
	/>
	<!-- TODO maybe event handlers instead? -->
	<Volume_Controls
		volume={$input_channel.volume}
		muted={$input_channel.muted}
		set_volume={input_channel.set_volume}
		mute={input_channel.mute}
		unmute={input_channel.unmute}
	/>
	<div class="source-controls">
		{#if input_source}
			{#if input_source.type === 'oscillator'}
				<Oscillator_Source_Controls {input_channel} {input_source} />
			{:else if input_source.type === 'mic'}
				<Mic_Source_Controls {input_channel} {input_source} />
			{/if}
		{:else}
			TODO select input source
		{/if}
	</div>
	<Pan_Controls pan={$input_channel.pan} set_pan={input_channel.set_pan} />
	{#if remove}
		<!-- TODO add remove icon to Felt icon set -->
		<button on:click={remove}>✖</button>
	{/if}
</div>

<style>
	.item {
		display: flex;
		align-items: center;
	}
	.name {
		max-width: 240px;
	}
	.source-controls {
		width: 350px;
		display: flex;
		align-items: stretch;
	}
</style>
