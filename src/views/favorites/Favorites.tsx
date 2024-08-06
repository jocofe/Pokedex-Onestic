import { useState, useContext, useMemo, useEffect } from 'react';
import { Button } from '../../components/buttons/Button';
import { PokemonCard } from '../../components/pokemon-card/PokemonCard';
import { Link, NavLink } from 'react-router-dom';
import { useFetchPokemonSinnoh } from '../../hooks/useFetchPokemonSinnoh';
import '../../components/pokemon-grid-list/pokemongridlist.css';
import { PokemonViewItem } from '../../models/pokemon-view-item';
import { PaginationControls } from '../../components/pagination-control/PaginationControls';
import { PokemonListViewToggle } from '../../components/pokemon-list-view-toggle.tsx/PokemonListViewToggle';
import { usePagination } from '../../hooks/usePagination';
import { FavoritesContext } from '../../context/FavoriteProvider';
import { useSearch } from '../../hooks/useSearch';

export const Favorites = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isListView, setIsListView] = useState(false);
	const { searchTerm } = useSearch();
	const { favorites } = useContext(FavoritesContext);
	const { pokemonList, error, isLoading } = useFetchPokemonSinnoh();

	useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const favoritePokemon = pokemonList.filter((pokemon) =>
		favorites.includes(String(pokemon.id))
	);

	const filteredPokemonList = useMemo(() => {
		return favoritePokemon.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [favoritePokemon, searchTerm]);

	const { paginatedItems: visiblePokemon, totalPages } = usePagination({
		items: filteredPokemonList,
		currentPage,
		itemsPerPage: 12,
	});

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
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
				<Button color='secondary' component={NavLink} to='/'>
					All Pokémon
				</Button>
			</div>
			<div
				className={
					isListView ? 'pokemon-grid pokemon-grid--list' : 'pokemon-grid'
				}>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{!isLoading && !error && filteredPokemonList.length === 0 && (
					<h3>{searchTerm} isn't saved in your favorites.</h3>
				)}
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
								toggleFavorite={() => {}}
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
