import { useState } from 'react';
import { useFetchPokemonSinnoh } from '../../hooks/useFetchPokemonSinnoh';
import { PokemonCard } from '../pokemon-card/PokemonCard';
import { PokemonViewItem } from '../../models/pokemon-view-item';
import '../pokemon-grid-list/pokemongridlist.css';
import { Button } from '../buttons/Button';
import { ListIcon, GridIcon, ArrowLeft, ArrowRight } from '../icons/icons';
import { Link, useNavigate } from 'react-router-dom';
import { PokemonCardProps } from '../../models/pokemoncarddetails';

export const PokemonGridList = (props: PokemonCardProps) => {
	const { pokemonName } = props;
	const [currentPage, setCurrentPage] = useState(1);
	const [isListView, setIsListView] = useState(false);
	const [listButtonText, setListButtonText] = useState('List');
	const { pokemonList, error, isLoading } = useFetchPokemonSinnoh();
	const [favorites] = useState<string[]>(() => {
		const storedFavorites = JSON.parse(
			localStorage.getItem('favorites') || '[]'
		);
		return storedFavorites;
	});
	const navigate = useNavigate();

	const pokemonPerPage = 12;
	const totalPokemon = pokemonList.length;
	const totalPages = Math.ceil(totalPokemon / pokemonPerPage);
	const startIndex = (currentPage - 1) * pokemonPerPage;
	const endIndex = startIndex + pokemonPerPage;
	const visiblePokemon = pokemonList.slice(startIndex, endIndex);

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
		setListButtonText((prev) => (prev === 'List' ? 'Grid' : 'List'));
	};

	const handleFavoritesClick = () => {
		navigate('/favorites');
	};

	return (
		<div className='pokemon-grid-wrapper'>
			<div className='button-wrapper'>
				<Button color='secondary' onClick={toggleListView}>
					{isListView ? (
						<GridIcon className='grid-icon' />
					) : (
						<ListIcon className='grid-icon' />
					)}
					{listButtonText}
				</Button>
				<Button color='secondary' onClick={handleFavoritesClick}>
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
						<div className='relative'>
							<PokemonCard
								key={pokemon.pokemonId}
								pokemonId={pokemon.pokemonId}
								pokemonName={pokemon.pokemonName}
								pokemonType={pokemon.pokemonType}
								isListView={isListView}
								favorites={favorites}
								isFavorite={false}
							/>
							<Link className='expanded-anchor' to={`/${pokemonName}`} />
						</div>
					))}
			</div>
			<div className='pokemon-grid__controls'>
				{currentPage > 1 && (
					<button className='page-btn' onClick={handlePrevPage}>
						<ArrowLeft className='icon-page' />
					</button>
				)}
				<p>Page {currentPage}</p>
				{currentPage < totalPages && (
					<button className='page-btn' onClick={handleNextPage}>
						<ArrowRight className='icon-page' />
					</button>
				)}
			</div>
		</div>
	);
};
