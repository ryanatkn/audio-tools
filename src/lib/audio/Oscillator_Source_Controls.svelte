<script lang="ts">
	import Frequency_Controls from '$lib/audio/Frequency_Controls.svelte';
	import Playing_Controls from '$lib/audio/Playing_Controls.svelte';
	import type {Oscillator_Source_Store} from '$lib/audio/oscillator_source';
	import type {Input_Channel_Store} from '$lib/audio/input_channel';

	export let input_channel: Input_Channel_Store;
	export let input_source: Oscillator_Source_Store;
</script>

<Playing_Controls
	playing={$input_channel.playing}
	play={input_channel.play}
	pause={input_channel.pause}
/>
<Frequency_Controls
	frequency={$input_source.frequency}
	set_frequency={input_source.set_frequency}
/>
