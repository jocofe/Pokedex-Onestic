import { PokemonType } from './pokemon-list';

export interface PokemonEvolutionsProps {
	evolutions: EvolutionItem[];
	favorites: string[];
	toggleFavorite: (id: string) => void;
}

export interface EvolutionItem {
	id: number;
	name: string;
	types: PokemonType[];
}

export interface EvolutionChain {
	chain: EvolutionDetail;
}

export interface EvolutionDetail {
	species: {
		name: string;
		url: string;
	};
	evolves_to: EvolutionDetail[];
}
