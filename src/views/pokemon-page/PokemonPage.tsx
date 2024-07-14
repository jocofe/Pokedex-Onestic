import { useContext, useEffect, useState } from 'react';
import { useGetPokemonPageInfo } from '../../hooks/useGetPokemonPageInfo';
import { useGetEvolutions } from '../../hooks/useGetEvolutions';
import { Loading } from '../../components/icons/icons';
import { Button } from '../../components/buttons/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';
import { FavoritesContext } from '../../context/FavoriteProvider';
import { PokemonStats } from '../../components/pokemon-page-components/PokemonStats';
import { PokemonInfo } from '../../components/pokemon-page-components/PokemonInfo';
import { PokemonImage } from '../../components/pokemon-page-components/PokemonImage';
import { PokemonHeader } from '../../components/pokemon-page-components/PokemonHearder';
import { PokemonEvolutions } from '../../components/pokemon-page-components/PokemonEvolutions';
import { useApplyTheme } from '../../utils/applyTheme';
import '../pokemon-page/pokemonpage.css';

export const PokemonPage = () => {
	const themeContext = useContext(ThemeContext);
	const { pokemonInfo } = useGetPokemonPageInfo();
	const { pokemonEvolutions } = useGetEvolutions();
	const [isLoading, setIsLoading] = useState(true);
	const { favorites, toggleFavorite } = useContext(FavoritesContext);
	const location = useLocation();
	const applyTheme = useApplyTheme();

	useEffect(() => {
		setIsLoading(!pokemonInfo);
	}, [pokemonInfo]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	useEffect(() => {
		if (themeContext) {
			applyTheme(themeContext.currentMode);
		}
	}, [themeContext, applyTheme]);

	if (isLoading) {
		return (
			<div className='loading'>
				<Loading className='loading-animation loading-md' />
			</div>
		);
	}

	if (!pokemonInfo) {
		return <h3>No information found for this Pokémon!</h3>;
	}

	return (
		<>
			<div className='pokemon-section'>
				<PokemonHeader
					name={pokemonInfo.name}
					id={pokemonInfo.id}
					types={pokemonInfo.types}
					order={0}
				/>
				<PokemonImage
					name={pokemonInfo.name}
					id={pokemonInfo.id}
					types={pokemonInfo.types}
					order={0}
				/>
				<PokemonInfo
					name={pokemonInfo.name}
					id={pokemonInfo.id}
					types={pokemonInfo.types}
					order={0}
					height={pokemonInfo.height}
					weight={pokemonInfo.weight}
				/>
				<PokemonStats
					name={pokemonInfo.name}
					id={pokemonInfo.id}
					types={pokemonInfo.types}
					order={0}
					stats={pokemonInfo.stats}
				/>
				<PokemonEvolutions
					evolutions={pokemonEvolutions}
					favorites={favorites}
					toggleFavorite={toggleFavorite}
				/>
				<div className='btn-back'>
					<Button component={NavLink} to='/'>
						Back to Pokédex
					</Button>
				</div>
			</div>
		</>
	);
};
