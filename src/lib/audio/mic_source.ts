import type {Omit_Strict} from '@feltcoop/felt';

import {to_to_client_id} from '$lib/util/id';
import type {Input_Source, Base_Input_Source_Store} from '$lib/audio/input_source';
import {to_input_source_store} from '$lib/audio/input_source';

export interface Mic_Source extends Input_Source<MediaStreamAudioSourceNode> {
	mic_stream: MediaStream | null;
}

const to_id = to_to_client_id('mic_source');

const to_default_mic_source = (mic_stream: MediaStream, name?: string): Mic_Source => {
	const id = to_id();
	return {
		id,
		name: name || id,
		destination: null,
		playing: false,
		node: null,
		mic_stream,
	};
};

export interface Mic_Source_Store
	extends Omit_Strict<
		Base_Input_Source_Store<'mic', MediaStreamAudioSourceNode, Mic_Source>,
		'update' | 'set'
	> {}

export const to_mic_source_store = (
	ac: AudioContext,
	mic_stream: MediaStream,
	name?: string,
): Mic_Source_Store => {
	// TODO how to tell when the `mic_stream` has ended? thought this would work:
	// for (const track of mic_stream.getTracks()) {
	// 	console.log('track', track);
	// 	track.onended = (e) => console.log('track ended, e', e);
	// }
	const {
		update,
		set: _set,
		...rest
	} = to_input_source_store<'mic', MediaStreamAudioSourceNode, Mic_Source>(
		'mic',
		to_default_mic_source(mic_stream, name),
		($source) => {
			return {...$source, node: ac.createMediaStreamSource(mic_stream)};
		},
		($source) => {
			return {...$source, node: null};
		},
	);

	const store: Mic_Source_Store = {
		...rest,
	};

	return store;
};
