import { PokemonType } from './pokemon-list';

export interface PokemonViewItem {
	pokemonId: string;
	pokemonName: string;
	pokemonType: PokemonType[];
	isListView: boolean;
}
