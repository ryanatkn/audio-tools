// TODO upstream to Felt

export interface Counter {
	(): number;
}

export const to_counter = (): Counter => {
	let count = 0;
	return () => ++count;
};
