import type {Writable} from 'svelte/store';
import {writable} from 'svelte/store';

import type {Input_Source_Store} from '$lib/audio/input_source';
import {to_to_client_id} from '$lib/util/id';
import type {Pan} from '$lib/audio/pan';
import {Volume, volume_to_gain} from '$lib/audio/volume';
import {DEFAULT_VOLUME} from '$lib/audio/volume';

// TODO support multiple sources and destinations --
// probably need to refactor everything, because node graphs!

export interface Input_Channel {
	id: string;
	name: string;
	source: Input_Source_Store | null;
	destination: AudioNode | null;
	playing: boolean;
	volume: Volume;
	muted: boolean;
	pan: Pan;
}

const to_id = to_to_client_id('input_channel');

const to_default_input_channel = (name?: string): Input_Channel => {
	const id = to_id();
	return {
		id,
		name: name || id,
		source: null,
		destination: null,
		playing: false,
		volume: DEFAULT_VOLUME,
		muted: false,
		pan: 0,
	};
};

export interface Input_Channel_Store {
	subscribe: Writable<Input_Channel>['subscribe'];
	set_name: (name: string) => void;
	connect: (destination: AudioNode | null) => void;
	set_source: (source: Input_Source_Store | null) => void; // TODO rename to `add_source` to support multiples
	play: () => void;
	pause: () => void;
	set_volume: (volume: Volume) => void;
	mute: () => void;
	unmute: () => void;
	set_pan: (pan: Pan) => void;
}

export const to_input_channel_store = (ac: AudioContext): Input_Channel_Store => {
	const initial_value = to_default_input_channel(); // not accepting as an arg to avoid bad states
	const {subscribe, update} = writable(initial_value);

	// TODO create a panner node only on demand
	const panner = ac.createStereoPanner();

	const gain = ac.createGain();

	panner.connect(gain);
	const first_node = panner;
	const last_node = gain;

	const store: Input_Channel_Store = {
		subscribe,
		set_name: (name) => update(($input_channel) => ({...$input_channel, name})),
		connect: (destination) =>
			update(($input_channel) => {
				if ($input_channel.destination) {
					last_node.disconnect();
				}
				if (destination) {
					last_node.connect(destination);
				}
				return {...$input_channel, destination};
			}),
		set_source: (source: Input_Source_Store | null) =>
			update(($input_channel) => {
				if ($input_channel.source === source) return $input_channel;
				if ($input_channel.source) {
					$input_channel.source.disconnect();
				}
				if (source) {
					source.connect(first_node);
				}
				return {...$input_channel, source};
			}),
		play: () =>
			update(($input_channel) => {
				if ($input_channel.source) {
					$input_channel.source.play();
				}
				return {...$input_channel, playing: true};
			}),
		pause: () =>
			update(($input_channel) => {
				if ($input_channel.source) {
					$input_channel.source.pause();
				}
				return {...$input_channel, playing: false};
			}),
		set_volume: (volume) =>
			update(($input_channel) => {
				if (!$input_channel.muted) {
					gain.gain.setValueAtTime(volume_to_gain(volume), ac.currentTime);
				}
				return {...$input_channel, volume};
			}),
		mute: () =>
			update(($input_channel) => {
				if ($input_channel.muted) return $input_channel;
				gain.gain.setValueAtTime(0, ac.currentTime);
				return {...$input_channel, muted: true};
			}),
		unmute: () =>
			update(($input_channel) => {
				if (!$input_channel.muted) return $input_channel;
				gain.gain.setValueAtTime(volume_to_gain($input_channel.volume), ac.currentTime);
				return {...$input_channel, muted: false};
			}),
		set_pan: (pan) =>
			update(($input_channel) => {
				panner.pan.setValueAtTime(pan, ac.currentTime);
				return {...$input_channel, pan};
			}),
	};

	// initialize
	store.set_volume(initial_value.volume);

	return store;
};
