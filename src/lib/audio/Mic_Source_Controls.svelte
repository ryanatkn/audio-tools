<script lang="ts">
	import Recording_Controls from '$lib/audio/Recording_Controls.svelte';
	import Mic_Controls from '$lib/audio/Mic_Controls.svelte';
	import type {Mic_Source_Store} from '$lib/audio/mic_source';
	import type {Input_Channel_Store} from '$lib/audio/input_channel';

	export let input_channel: Input_Channel_Store;
	export let input_source: Mic_Source_Store;
</script>

<Recording_Controls
	recording={$input_channel.playing}
	start={input_channel.play}
	stop={input_channel.pause}
/>
<Mic_Controls />
