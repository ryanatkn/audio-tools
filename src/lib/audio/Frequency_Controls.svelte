<script lang="ts">
	import type {Frequency} from '$lib/audio/frequency';

	// TODO make a MIDI version of this
	// TODO maybe emit events or bind externally instead?

	export let frequency: Frequency;
	export let set_frequency: (frequency: Frequency) => void;
	export let min: Frequency = 60;
	export let max: Frequency = 880;
	export let step: Frequency = 1;
</script>

<label>
	<input
		type="number"
		{min}
		{max}
		{step}
		value={frequency}
		on:input={(e) => set_frequency(Number(e.currentTarget.value))}
	/>
	<span class="label-text">hz</span>
</label>
<input
	type="range"
	{min}
	{max}
	{step}
	value={frequency}
	on:input={(e) => set_frequency(Number(e.currentTarget.value))}
/>
