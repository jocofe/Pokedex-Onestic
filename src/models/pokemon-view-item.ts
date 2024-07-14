import { PokemonStat, PokemonType } from './pokemon-list';

export interface PokemonViewItem {
	id: string;
	name: string;
	order: number;
	height?: number;
	weight?: number;
	types: PokemonType[];
	stats: PokemonStat[];
	isListView?: boolean;
}
