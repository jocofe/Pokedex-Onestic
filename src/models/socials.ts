export interface SocialsProps {
	id?: string | number;
	className?: string;
	name?: string;
	onFavoriteToggle: () => void;
	isFavorite?: boolean;
}
