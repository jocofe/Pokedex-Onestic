import { PokemonType } from './pokemon-list';

export interface PokemonCardProps {
	pokemonId: string;
	pokemonName: string;
	pokemonType: PokemonType[];
	isListView: boolean;
	isFavorite: boolean;
	favorites: string[];
}
