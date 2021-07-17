import {writable} from 'svelte/store';
import type {Writable} from 'svelte/store';

import type {Oscillator_Source_Store} from '$lib/audio/oscillator_source';
import type {Mic_Source_Store} from '$lib/audio/mic_source';

export type Input_Source_Store = Oscillator_Source_Store | Mic_Source_Store;

export interface Input_Source<T_Node extends AudioNode = AudioNode> {
	id: string;
	name: string;
	node: T_Node | null;
	destination: AudioNode | null;
	playing: boolean;
}

export interface Base_Input_Source_Store<
	T_Type extends string = string,
	T_Node extends AudioNode = AudioNode,
	T_Source extends Input_Source<T_Node> = Input_Source<T_Node>,
> extends Writable<T_Source> {
	type: T_Type;
	set_name: (name: string) => void;
	connect: (destination: AudioNode | null) => void;
	disconnect: () => void; // TODO add `destination` arg to support multiples
	play: () => void;
	pause: () => void;
}

export interface Play_Input_Source<
	T_Node extends AudioNode,
	T_Source extends Input_Source<T_Node>,
> {
	($source: T_Source): T_Source;
}

export interface Pause_Input_Source<
	T_Node extends AudioNode,
	T_Source extends Input_Source<T_Node>,
> {
	($source: T_Source): T_Source;
}

export const to_input_source_store = <
	T_Type extends string,
	T_Node extends AudioNode,
	T_Source extends Input_Source<T_Node>,
>(
	type: T_Type,
	initial_value: T_Source,
	play: Play_Input_Source<T_Node, T_Source>,
	pause: Pause_Input_Source<T_Node, T_Source>,
): Base_Input_Source_Store<T_Type, T_Node, T_Source> => {
	const {subscribe, update, set} = writable(initial_value);

	const connect = ($source: T_Source) => {
		if ($source.node && $source.destination) {
			$source.node.connect($source.destination);
		}
	};
	const disconnect = ($source: T_Source) => {
		if ($source.node && $source.destination) {
			$source.node.disconnect();
		}
	};

	// TODO maybe `update_connection` that gets called in multiple places?

	const store: Base_Input_Source_Store<T_Type, T_Node, T_Source> = {
		type,
		subscribe,
		update,
		set,
		set_name: (name) => update(($source) => ({...$source, name})),
		connect: (destination) =>
			update(($source) => {
				disconnect($source);
				const $updated = {...$source, destination};
				connect($updated);
				return $updated;
			}),
		disconnect: () =>
			update(($source) => {
				disconnect($source);
				return {...$source, destination: null};
			}),
		play: () =>
			update(($source) => {
				if ($source.playing) return $source;
				const $updated = play($source);
				if ($updated.node !== $source.node) {
					disconnect($source);
					connect($updated);
				}
				return {...$updated, playing: true};
			}),
		pause: () =>
			update(($source) => {
				if (!$source.playing) return $source;
				const $updated = pause($source);
				if ($updated.node !== $source.node) {
					disconnect($source);
					connect($updated);
				}
				return {...$updated, playing: false};
			}),
	};

	return store;
};
