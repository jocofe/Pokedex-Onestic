import { PokemonItem } from '../models/pokemon-list';
import { PokemonViewItem } from '../models/pokemon-view-item';

export const mapPokemonApiToPokemonView = (
	pokemon: PokemonItem
): PokemonViewItem => {
	return {
		id: pokemon.id,
		name: pokemon.name,
		order: pokemon.order,
		height: pokemon.height || 0,
		weight: pokemon.weight || 0,
		types: pokemon.types,
		stats: pokemon.stats || [],
		isListView: false,
	};
};
