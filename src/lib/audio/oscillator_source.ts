import type {Omit_Strict} from '@feltcoop/felt';

import {to_input_source_store} from '$lib/audio/input_source';
import {to_to_client_id} from '$lib/util/id';
import type {Input_Source, Base_Input_Source_Store} from '$lib/audio/input_source';
import type {Frequency} from '$lib/audio/frequency';
import {DEFAULT_FREQUENCY} from '$lib/audio/frequency';

export interface Oscillator_Source extends Input_Source<OscillatorNode> {
	frequency: Frequency;
}

const to_id = to_to_client_id('oscillator_source');

const to_default_oscillator_source = (name?: string): Oscillator_Source => {
	const id = to_id();
	return {
		id,
		name: name || id,
		destination: null,
		playing: false,
		node: null,
		frequency: DEFAULT_FREQUENCY,
	};
};

export interface Oscillator_Source_Store
	extends Omit_Strict<
		Base_Input_Source_Store<'oscillator', OscillatorNode, Oscillator_Source>,
		'update' | 'set'
	> {
	set_frequency: (frequency: Frequency) => void;
}

// WebAudio oscillators cannot be restarted once stopped,
// so this store creates new nodes as necessary to support a nice interface.

export const to_oscillator_source_store = (
	ac: AudioContext,
	name?: string,
): Oscillator_Source_Store => {
	const initial_value = to_default_oscillator_source(name);
	const {
		update,
		set: _set,
		...rest
	} = to_input_source_store<'oscillator', OscillatorNode, Oscillator_Source>(
		'oscillator',
		initial_value,
		($source) => {
			const node = ac.createOscillator();
			node.frequency.setValueAtTime($source.frequency, ac.currentTime);
			node.start();
			return {...$source, node};
		},
		($source) => {
			if ($source.node) {
				$source.node.stop();
			}
			return {...$source, node: null};
		},
	);

	const store: Oscillator_Source_Store = {
		...rest,
		set_frequency: (frequency) =>
			update(($source) => {
				if ($source.node) {
					$source.node.frequency.setValueAtTime(frequency, ac.currentTime);
				}
				return {...$source, frequency};
			}),
	};

	store.set_frequency(initial_value.frequency);

	return store;
};
