import { PokemonType } from './pokemon-list';

export interface PokemonCardDetails {
	pokemonId: string;
	pokemonName: string;
	pokemonType: PokemonType[];
}
