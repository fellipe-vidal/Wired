import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { writable, type Updater, type Writable, get } from 'svelte/store';

type Character = {
	info: {
		name: string;
		alias: string;
	};
	stats: {
		attributes: {
			strength: number;
			agility: number;
			willpower: number;
			logic: number;
			charisma: number;
			edge: number;
		};
		skills: Record<string, number>;
		amps: Record<string, number>;
	};
};

const baseStats: Character['stats'] = {
	attributes: {
		strength: 1,
		agility: 1,
		charisma: 1,
		edge: 1,
		logic: 1,
		willpower: 1
	},
	skills: {},
	amps: {}
};
