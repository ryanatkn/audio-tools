import {to_counter} from '$lib/util/counter';

// TODO upstream to Felt

export interface To_To_Client_Id {
	(name: string): To_Client_Id;
}

export interface To_Client_Id {
	(): string;
}

export const to_to_client_id: To_To_Client_Id = (name) => {
	const counter = to_counter();
	return () => `${name}_${counter()}`;
};
