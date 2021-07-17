<script lang="ts">
	import type {Writable} from 'svelte/store';
	import {writable, get} from 'svelte/store';
	import {browser} from '$app/env';

	import type {Volume} from '$lib/audio/volume';
	import {volume_to_gain} from '$lib/audio/volume';
	import Volume_Controls from '$lib/audio/Volume_Controls.svelte';
	import Input_Channel_Item from '$lib/audio/Input_Channel_Item.svelte';
	import Audio_Clip_Item from '$lib/audio/Audio_Clip_Item.svelte';
	import Mic_Stream from '$lib/audio/Mic_Stream.svelte';
	import {to_audio_clip} from '$lib/audio/audio_clip';
	import type {Input_Channel_Store} from '$lib/audio/input_channel';
	import {to_input_channel_store} from '$lib/audio/input_channel';
	import type {Audio_Clip} from '$lib/audio/audio_clip';
	import {to_oscillator_source_store} from '$lib/audio/oscillator_source';
	import {to_mic_source_store} from '$lib/audio/mic_source';

	/*

	this is a mess
	
	- names aren't good
	- abstractions are leaky and janky
	- *some* things work

	todos

	- fix mic so output doesn't go to speakers
	- input_channel gain
	- clip sequencer
	- musical note inputs

	*/

	let mime_type = 'audio/webm;codecs=opus';
	$: mime_type_error =
		!browser || MediaRecorder.isTypeSupported(mime_type) ? null : 'mime type is not supported';

	let input_channels: Input_Channel_Store[] = [];
	let clips: Writable<Audio_Clip>[] = [];

	let ac: AudioContext;
	let main_gain: GainNode;
	let recorder_destination: MediaStreamAudioDestinationNode;
	let recorder: MediaRecorder;

	let initialized_mic = false;
	let mic_stream: MediaStream | null;
	$: if (mic_stream) {
		initialized_mic = true;
		add_mic_input_channel(ac, main_gain, mic_stream);
	} else if (initialized_mic) {
		remove_mic_input_channels();
	}

	$: enable_main_controls = !!input_channels.length || !!mic_stream;

	// TODO refactor this into a main input_channel, but need to decouple oscillator input from it
	let volume: Volume = 1;
	let muted = false;
	$: main_gain?.gain.setValueAtTime(muted ? 0 : volume_to_gain(volume), 0);

	const set_volume = (value: Volume): void => {
		volume = value;
	};

	const chunks: Blob[] = []; // is mutated and never reassigned

	// Some browsers disallow starting an AudioContext without user interaction,
	// so instead of calling resume, we just defer creating until a user action.
	let ready = false;

	// TODO extract
	const init = () => {
		ac = new AudioContext();

		recorder_destination = ac.createMediaStreamDestination();

		main_gain = ac.createGain();
		main_gain.connect(recorder_destination); // for recording
		main_gain.connect(ac.destination); // also play from the device's speakers -- TODO this usually isn't wanted with the mic

		recorder = new MediaRecorder(recorder_destination.stream, {mimeType: mime_type});
		recorder.ondataavailable = (e) => {
			console.log('recorder.ondataavailable', e);
			chunks.push(e.data);
		};
		recorder.onstop = (e) => {
			console.log('recorder.onstop', e);
			// TODO use `File` instead and give it a name?
			// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs
			// TODO import and try flac
			clips = clips.concat(writable(to_audio_clip(new Blob(chunks, {type: mime_type}))));
			chunks.length = 0;
		};

		add_oscillator_input_channel(ac, main_gain);

		ready = true;
	};

	const add_oscillator_input_channel = (ac: AudioContext, destination: AudioNode): void => {
		const input_channel = to_input_channel_store(ac);
		input_channels = input_channels.concat(input_channel);
		const oscillator_source = to_oscillator_source_store(ac);
		input_channel.set_source(oscillator_source);
		input_channel.connect(destination);
	};

	const add_mic_input_channel = async (
		ac: AudioContext,
		destination: AudioNode,
		mic_stream: MediaStream,
	): Promise<void> => {
		const input_channel = to_input_channel_store(ac);
		input_channels = [input_channel, ...input_channels];
		const mic_source = to_mic_source_store(ac, mic_stream);
		input_channel.set_source(mic_source);
		input_channel.connect(destination);
		input_channel.play();
		input_channel.set_volume(1);
	};

	const remove_mic_input_channels = () => {
		remove_input_channels(
			input_channels.filter((input_channel) => get(input_channel).source?.type === 'mic'),
		);
	};

	const remove_input_channel = (input_channel: Input_Channel_Store): void => {
		input_channel.pause(); // TODO do we need a different cleanup method?
		input_channels = input_channels.filter((i) => i !== input_channel);
	};
	const remove_input_channels = (input_channels_to_remove: Input_Channel_Store[]): void => {
		input_channels_to_remove.forEach((i) => i.pause());
		input_channels = input_channels.filter((i) => !input_channels_to_remove.includes(i));
	};

	const remove_clip = (clip: Writable<Audio_Clip>) => {
		clips = clips.filter((c) => c !== clip);
	};

	let playing_all = true; // TODO is kinda broken, should be derived but not sure of the best way
	let recording = false;

	const play_all = () => {
		playing_all = true;
		for (const input_channel of input_channels) {
			input_channel.play();
		}
	};
	const pause_all = () => {
		playing_all = false;
		for (const input_channel of input_channels) {
			input_channel.pause();
		}
	};
	const start_recording = () => {
		recording = true;
		recorder.start();
	};
	const stop_recording = () => {
		recording = false;
		recorder.stop();
	};
</script>

{#if ready}
	<div class="main-controls">
		<!-- TODO this is kind of broken, see `playing_all` above -->
		<button
			on:click={() => (playing_all ? pause_all() : play_all())}
			disabled={!enable_main_controls}
		>
			{#if playing_all}
				⏸︎ pause all
			{:else}
				▶️ play all
			{/if}
		</button>
		<button
			on:click={() => (recording ? stop_recording() : start_recording())}
			disabled={!enable_main_controls}
			class:selected={recording}
		>
			{#if recording}
				⏹ stop recording
			{:else}
				⏺︎ start recording
			{/if}
		</button>
		<!-- TODO which pattern? bind? events? callbacks? -->
		<Volume_Controls
			{volume}
			{muted}
			{set_volume}
			mute={() => (muted = true)}
			unmute={() => (muted = false)}
		/>
	</div>
	<label>
		<input type="text" bind:value={mime_type} />
		{#if mime_type_error}
			{mime_type_error}
		{:else}
			mime type
		{/if}
	</label>
	<div class="add-sources">
		<button on:click={() => add_oscillator_input_channel(ac, main_gain)}>🌊 add oscillator</button>
		<Mic_Stream bind:mic_stream />
		<!-- <button
			on:click={() => mic_stream && add_mic_input_channel(ac, main_gain, mic_stream)}
			disabled={!mic_stream}
		>
			🎤 add mic source
		</button> -->
	</div>
	<ul>
		<!--  TODO destroy the input_channels -->
		{#each input_channels as input_channel (input_channel)}
			<Input_Channel_Item {input_channel} remove={() => remove_input_channel(input_channel)} />
		{/each}
	</ul>
	<ul>
		{#each clips as clip (clip)}
			<Audio_Clip_Item {clip} remove={() => remove_clip(clip)} />
		{/each}
	</ul>
{:else}
	<button on:click={init}>enter the audio recording studio</button>
{/if}

<style>
	.main-controls {
		display: flex;
		align-items: center;
	}
	.add-sources {
		display: flex;
		align-items: center;
	}
</style>
