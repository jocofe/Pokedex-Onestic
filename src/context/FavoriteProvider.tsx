import { createContext, useEffect, useState } from 'react';

export interface FavoritesContextType {
	favorites: string[];
	toggleFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
	favorites: [],
	toggleFavorite: () => {},
});

export const FavoritesProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [favorites, setFavorites] = useState<string[]>([]);

	useEffect(() => {
		const storedFavorites = JSON.parse(
			localStorage.getItem('favorites') || '[]'
		);
		setFavorites(storedFavorites);
	}, []);

	const toggleFavorite = (id: string) => {
		const isAlreadyFavorite = favorites.includes(id);
		const updatedFavorites = isAlreadyFavorite
			? favorites.filter((fav) => fav !== id)
			: [...favorites, id];
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		setFavorites(updatedFavorites);
	};

	return (
		<FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
};
