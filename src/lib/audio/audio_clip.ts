import {to_to_client_id} from '$lib/util/id';

export interface Audio_Clip {
	id: string;
	name: string;
	blob: Blob | null;
}

const to_id = to_to_client_id('audio_clip');

export const to_audio_clip = (blob: Blob | null, name?: string): Audio_Clip => {
	const id = to_id();
	return {
		id,
		name: name || id,
		blob,
	};
};
