import { useState, useEffect, useContext } from 'react';
import { Button } from '../../components/buttons/Button';
import {
	GridIcon,
	ListIcon,
	ArrowLeft,
	ArrowRight,
} from '../../components/icons/icons';
import { PokemonCard } from '../../components/pokemon-card/PokemonCard';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchPokemonSinnoh } from '../../hooks/useFetchPokemonSinnoh';
import '../../components/pokemon-grid-list/pokemongridlist.css';
import { PokemonViewItem } from '../../models/pokemon-view-item';
import { ThemeContext } from '../../context/ThemeProvider';

export const Favourites = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isListView, setIsListView] = useState(false);
	const [listButtonText, setListButtonText] = useState('List');
	const [favorites, setFavorites] = useState<string[]>([]);
	const [error, setError] = useState('');
	const { pokemonList, isLoading } = useFetchPokemonSinnoh();
	const navigate = useNavigate();

	const pokemonPerPage = 12;

	useEffect(() => {
		try {
			const storedFavorites = JSON.parse(
				localStorage.getItem('favorites') || '[]'
			);
			setFavorites(storedFavorites);
		} catch (err) {
			setError('Failed to load favorites.');
		}
	}, []);

	const favoritePokemon = pokemonList.filter((pokemon) =>
		favorites.includes(pokemon.id)
	);

	const totalPokemon = favoritePokemon.length;
	const totalPages = Math.ceil(totalPokemon / pokemonPerPage);

	const startIndex = (currentPage - 1) * pokemonPerPage;
	const endIndex = startIndex + pokemonPerPage;

	const visiblePokemon = favoritePokemon.slice(startIndex, endIndex);

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

	const themeContext = useContext(ThemeContext);

	useEffect(() => {
		const pageElements = document.getElementsByClassName(
			'page'
		) as HTMLCollectionOf<HTMLElement>;

		if (themeContext?.currentMode === 'dark-mode') {
			for (let i = 0; i < pageElements.length; i++) {
				pageElements[i].style.color = 'var(--color-white)';
			}
		} else {
			for (let i = 0; i < pageElements.length; i++) {
				pageElements[i].style.color = 'var(--color-blackball)';
			}
		}
	}, [themeContext?.currentMode]);

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
					visiblePokemon.map((pokemon: PokemonViewItem) => (
						<div className='relative' key={pokemon.id}>
							<Link className='expanded-anchor' to={`/${pokemon.id}`} />
							<PokemonCard
								id={pokemon.id}
								name={pokemon.name}
								types={pokemon.types}
								isListView={isListView}
								favorites={favorites}
								isFavorite={favorites.includes(pokemon.id)}
							/>
						</div>
					))}
			</div>
			<div className='pokemon-grid__controls'>
				{currentPage > 1 && (
					<button className='page-btn' onClick={handlePrevPage}>
						<ArrowLeft className='icon-page' />
					</button>
				)}
				<p className='page'>Page {currentPage}</p>
				{currentPage < totalPages && (
					<button className='page-btn' onClick={handleNextPage}>
						<ArrowRight className='icon-page' />
					</button>
				)}
			</div>
		</div>
	);
};
