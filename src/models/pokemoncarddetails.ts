import { PokemonType } from './pokemon-list';

export interface PokemonCardProps {
	id: string | number;
	name: string;
	types: PokemonType[];
	isListView: boolean;
	isFavorite: boolean;
	toggleFavorite: () => void;
}
