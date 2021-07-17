import type {Flavored} from '@feltcoop/felt';

export type Volume = Flavored<number, 'Volume'>; // user-facing value 0-1
export type Gain = Flavored<number, 'Gain'>; // GainNode value 0-1

export const DEFAULT_VOLUME: Volume = 0.33;

// Convert a user-facing volume value (0-1) to the final gain value.
// We want some sort of nonlinear curve to match user expectations.
// TODO why is this exponent so different from the article?
// https://www.dr-lex.be/info-stuff/volumecontrols.html
export const VOLUME_TO_GAIN_EXPONENT = 2.2;

export const volume_to_gain = (volume: Volume): Gain => Math.pow(volume, VOLUME_TO_GAIN_EXPONENT);
