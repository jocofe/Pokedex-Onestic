import { ReactNode } from 'react';

export interface FavoritesContextType {
	favorites: string[];
	toggleFavorite: (id: string) => void;
}

export interface FavoriteProviderProps {
	children: ReactNode;
}
