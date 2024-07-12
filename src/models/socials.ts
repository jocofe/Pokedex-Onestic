export interface SocialsProps {
	id?: string;
	className?: string;
	name?: string;
	onFavoriteToggle: () => void;
	isFavorite?: boolean;
}
