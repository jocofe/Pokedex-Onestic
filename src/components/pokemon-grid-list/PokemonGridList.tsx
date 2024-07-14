import { useContext, useMemo, useState } from 'react';
import { useFetchPokemonSinnoh } from '../../hooks/useFetchPokemonSinnoh';
import { PokemonCard } from '../pokemon-card/PokemonCard';
import { PokemonViewItem } from '../../models/pokemon-view-item';
import '../pokemon-grid-list/pokemongridlist.css';
import { Button } from '../buttons/Button';
import { Link, NavLink } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoriteProvider';
import { PokemonListViewToggle } from '../pokemon-list-view-toggle.tsx/PokemonListViewToggle';
import { PaginationControls } from '../pagination-control/PaginationControls';
import { usePagination } from '../../hooks/usePagination';
import { useSearch } from '../../hooks/useSearch';

export const PokemonGridList = () => {
	const { favorites, toggleFavorite } = useContext(FavoritesContext);
	const { searchTerm } = useSearch();
	const [currentPage, setCurrentPage] = useState(1);
	const [isListView, setIsListView] = useState(false);
	const { pokemonList, error, isLoading } = useFetchPokemonSinnoh();

	const filteredPokemonList = useMemo(() => {
		return pokemonList.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [pokemonList, searchTerm]);

	const { paginatedItems: visiblePokemon, totalPages } = usePagination({
		items: filteredPokemonList,
		currentPage,
		itemsPerPage: 12,
	});

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			window.scrollTo(0, 0);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			window.scrollTo(0, 0);
		}
	};

	const toggleListView = () => {
		setIsListView((prev) => !prev);
	};

	return (
		<div className='pokemon-grid-wrapper'>
			<div className='button-wrapper'>
				<PokemonListViewToggle
					isListView={isListView}
					onToggle={toggleListView}
				/>
				<Button color='secondary' component={NavLink} to='/favorites'>
					Favorites
				</Button>
			</div>
			<div
				className={
					isListView ? 'pokemon-grid pokemon-grid--list' : 'pokemon-grid'
				}>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{!isLoading &&
					!error &&
					visiblePokemon.map((pokemon: PokemonViewItem) => (
						<div className='relative' key={pokemon.id}>
							<Link className='expanded-anchor' to={`/${pokemon.id}`} />
							<PokemonCard
								id={pokemon.id}
								name={pokemon.name}
								types={pokemon.types}
								isListView={isListView}
								isFavorite={favorites.includes(String(pokemon.id))}
								toggleFavorite={() => toggleFavorite(String(pokemon.id))}
							/>
						</div>
					))}
			</div>
			<PaginationControls
				currentPage={currentPage}
				totalPages={totalPages}
				onPrevPage={handlePrevPage}
				onNextPage={handleNextPage}
			/>
		</div>
	);
};
