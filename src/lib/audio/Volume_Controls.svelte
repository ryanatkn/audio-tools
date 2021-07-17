<script lang="ts">
	export let volume: number;
	export let muted: boolean;

	// TODO maybe emit events instead?
	export let set_volume: (volume: number) => void;
	export let mute: () => void;
	export let unmute: () => void;
</script>

<div class="volume-control">
	<label>
		<input
			class="percent"
			type="number"
			value={Math.round(volume * 100)}
			step="1"
			min="0"
			max="100"
			on:input={(e) => set_volume(Number(e.currentTarget.value) / 100)}
		/>
		<span class="label-text">%</span>
	</label>
	<label>
		<input
			type="range"
			min={0}
			max={1}
			step={0.01}
			value={volume}
			on:input={(e) => set_volume(Number(e.currentTarget.value))}
		/>
	</label>
	<button type="button" on:click={() => (muted ? unmute() : mute())}>
		{#if muted}🔇{:else}🔊{/if}
	</button>
</div>

<style>
	.volume-control {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.percent {
		width: 90px;
		min-width: 90px;
	}

	input {
		min-width: 90px;
		max-width: 120px;
	}
</style>
