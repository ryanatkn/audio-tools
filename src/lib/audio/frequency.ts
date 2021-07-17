import type {Flavored} from '@feltcoop/felt';

export type Frequency = Flavored<number, 'Frequency'>;

export const DEFAULT_FREQUENCY: Frequency = 440;
