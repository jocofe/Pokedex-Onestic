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
	base_stat: number;
}

export interface PokemonItem {
	id: string;
	name: string;
	order: number;
	height: number;
	weight: number;
	types: PokemonType[];
	stats: PokemonStat[];
}
