import { useState, useEffect } from 'react';
import { Button } from '../../components/buttons/Button';
import {
	GridIcon,
	ListIcon,
	ArrowLeft,
	ArrowRight,
} from '../../components/icons/icons';
import { PokemonCard } from '../../components/pokemon-card/PokemonCard';
import { useNavigate } from 'react-router-dom';
import { PokemonCardProps } from '../../models/pokemoncarddetails';

export const Favourites = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isListView, setIsListView] = useState(false);
	const [listButtonText, setListButtonText] = useState('List');
	const [favorites, setFavorites] = useState<PokemonCardProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error] = useState('');
	const navigate = useNavigate();

	const pokemonPerPage = 12;

	useEffect(() => {
		const storedFavorites = JSON.parse(
			localStorage.getItem('favorites') || '[]'
		);
		setFavorites(storedFavorites);
		setIsLoading(false);
	}, []);

	const totalPokemon = favorites.length;
	const totalPages = Math.ceil(totalPokemon / pokemonPerPage);

	const startIndex = (currentPage - 1) * pokemonPerPage;
	const endIndex = startIndex + pokemonPerPage;

	const visiblePokemon = favorites.slice(startIndex, endIndex);

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

	const handleAllClick = () => {
		navigate('/');
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
				<Button color='secondary' onClick={handleAllClick}>
					All Pokémon
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
					visiblePokemon.map((pokemon: PokemonCardProps) => (
						<PokemonCard
							key={pokemon.id}
							pokemonId={pokemon.id}
							pokemonName={pokemon.name}
							pokemonType={pokemon.types.map(
								(typeInfo: any) => typeInfo.type.name
							)}
							isListView={isListView}
							favorites={favorites}
						/>
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
