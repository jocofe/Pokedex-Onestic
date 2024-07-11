export interface SocialsProps {
	pokemonId?: string;
	className?: string;
	pokemonName?: string;
	onFavoriteToggle: () => void;
	isFavorite?: boolean;
}
