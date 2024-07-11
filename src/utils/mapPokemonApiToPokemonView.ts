import { PokemonItem } from '../models/pokemon-list';
import { PokemonViewItem } from '../models/pokemon-view-item';

export const mapPokemonApiToPokemonView = (
	pokemon: PokemonItem
): PokemonViewItem => {
	return {
		pokemonId: pokemon.id.toString(),
		pokemonName: pokemon.name,
		pokemonType: pokemon.types,
		isListView: false,
	};
};
