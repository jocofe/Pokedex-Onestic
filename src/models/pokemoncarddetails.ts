import { PokemonType } from './pokemon-list';

export interface PokemonCardProps {
	id: string;
	name: string;
	types: PokemonType[];
	isListView: boolean;
	isFavorite: boolean;
	favorites: string[];
}
