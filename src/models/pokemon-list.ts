export interface PokemonType {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface PokemonStat {
	stat: {
		name: string;
	};
}

export interface PokemonItem {
	id: number;
	name: string;
	order: number;
	height: number;
	weight: number;
	types: PokemonType[];
	stats: PokemonStat[];
}
