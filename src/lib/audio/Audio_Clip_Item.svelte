<script lang="ts">
	import type {Writable} from 'svelte/store';

	import type {Audio_Clip} from '$lib/audio/audio_clip';

	export let clip: Writable<Audio_Clip>;
	export let remove: (() => void) | null = null;

	// TODO what's a better way to do this? don't want the blob to recompute on `name` changes
	let last_blob: Blob | null | undefined = undefined;
	let blob_url: string | undefined = undefined;
	$: if ($clip.blob !== last_blob) {
		last_blob = $clip.blob;
		blob_url = $clip.blob ? URL.createObjectURL($clip.blob) : undefined;
	}
</script>

<div class="item">
	<!-- TODO this mutates the clip object right? change it to be immutable? -->
	<input type="text" class="name" bind:value={$clip.name} />
	<audio controls={!!$clip.blob} src={blob_url}>
		Your browser does not support the <code>audio</code> element.
		<!-- TODO a11y warning -->
		<track kind="captions" />
	</audio>
	{#if blob_url}
		<a href={blob_url} target="_blank">download</a>
	{/if}
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
		font-size: var(--font_size_lg);
	}
	a {
		margin: 0 var(--spacing_md);
	}
</style>
