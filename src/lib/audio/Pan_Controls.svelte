<script lang="ts">
	import type {Pan} from '$lib/audio/pan';

	// TODO support values other than -1, 0, and 1
	// how? with a flag? or a different component? `Analog_Pan_Controls`?
	// or rename this to `Pan_Controls_Simple`?

	export let pan: Pan;
	export let set_pan: (pan: Pan) => void;

	const cycle = () => {
		const next_pan = pan === -1 ? 1 : pan === 1 ? 0 : -1;
		set_pan(next_pan);
	};
</script>

<button on:click={cycle}>
	{#if pan === -1}
		⇐
	{:else if pan === 1}
		⇒
	{:else}
		⇔
	{/if}
</button>
