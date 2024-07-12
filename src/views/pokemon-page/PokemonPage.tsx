import { useContext, useEffect, useState } from 'react';
import { useGetPokemonPageInfo } from '../../hooks/useGetPokemonPageInfo';
import { useGetEvolutions } from '../../hooks/useGetEvolutions';
import { Loading } from '../../components/icons/icons';
import { Button } from '../../components/buttons/Button';
import '../pokemon-page/pokemonpage.css';
import { getPokemonTypeColor } from '../../utils/getPokemonTypeColor';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';
import { PokemonCard } from '../../components/pokemon-card/PokemonCard';
import { FavoritesContext } from '../../context/FavoriteProvider';

export const PokemonPage = () => {
	const themeContext = useContext(ThemeContext);
	const { pokemonInfo } = useGetPokemonPageInfo();
	const { pokemonEvolutions } = useGetEvolutions();
	const [isLoading, setIsLoading] = useState(true);
	const { favorites, toggleFavorite } = useContext(FavoritesContext);

	useEffect(() => {
		setIsLoading(!pokemonInfo);
	}, [pokemonInfo]);

	useEffect(() => {
		if (!themeContext) return;

		const pageElement = document.querySelector(
			'.pokemon-section'
		) as HTMLElement | null;
		const titleElements = document.querySelectorAll(
			'.pokemon__height, .pokemon__weight, .pokemon-stats, .pokemon-subtitle, .pokemon-stat__name'
		) as NodeListOf<HTMLElement>;
		const infoElement = document.querySelector(
			'.pokemon-info'
		) as HTMLElement | null;
		const separatorElements = document.querySelectorAll(
			'.separator'
		) as NodeListOf<HTMLElement>;

		if (pageElement) {
			if (themeContext.currentMode === 'dark-mode') {
				pageElement.style.backgroundColor = 'var(--color-blackball)';
				titleElements.forEach((element) => {
					element.style.color = 'var(--color-white)';
				});
				if (infoElement) {
					infoElement.style.backgroundColor = 'var(--color-blackball)';
				}
				separatorElements.forEach((element) => {
					element.style.backgroundColor = 'var(--color-white)';
				});
			} else {
				pageElement.style.backgroundColor = 'var(--color-white)';
				titleElements.forEach((element) => {
					element.style.color = 'var(--color-blackball)';
				});
				if (infoElement) {
					infoElement.style.backgroundColor = 'var(--color-white)';
				}
				separatorElements.forEach((element) => {
					element.style.backgroundColor = 'var(--color-blackball)';
				});
			}
		}
	}, [themeContext]);

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

	const capitalizedPokemonName = capitalizeFirstLetter(pokemonInfo.name);
	const capitalizedTypes = pokemonInfo.types.map((type) =>
		capitalizeFirstLetter(type.type.name)
	);
	const headerStyle = {
		backgroundColor: getPokemonTypeColor(pokemonInfo.types),
	};
	const maxStatValue = 252;

	return (
		<>
			<div className='pokemon-section'>
				<div className='pokemon-header' style={headerStyle}>
					<div className='pokemon__title'>
						<h1 className='h3'>{capitalizedPokemonName}</h1>
						<h2 className='h1'>{pokemonInfo.id}</h2>
					</div>
				</div>
				<div className='img-wrapper'>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
						alt={pokemonInfo.name}
						className='pokemon-img'
					/>
				</div>
				<div className='pokemon-info'>
					<div className='pokemon__types'>
						{capitalizedTypes.map((type, index) => (
							<span
								key={index}
								className={`type type--${pokemonInfo.types[index].type.name}`}>
								{type}
							</span>
						))}
					</div>
					<div className='pokemon__characteristics'>
						<div className='pokemon__height'>
							<h4>Height</h4>{' '}
							<span className='pokemon-height'>{pokemonInfo.height}</span>
						</div>
						<div className='separator'></div>
						<div className='pokemon__weight'>
							<h4>Weight</h4>{' '}
							<span className='pokemon-weight'>{pokemonInfo.weight}</span>
						</div>
					</div>
				</div>
				<div className='pokemon-stats'>
					<h3 className='pokemon-subtitle'>Stats</h3>
					<div className='stats-wrapper'>
						{pokemonInfo.stats.map((stat) => (
							<div className='pokemon__stat' key={stat.stat.name}>
								<h4 className='pokemon-stat__name'>{stat.stat.name}</h4>
								<div className='stat-bar'>
									<div
										className='stat-bar__fill'
										style={{
											width: `${(stat.base_stat / maxStatValue) * 100}%`,
										}}>
										{stat.base_stat}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{pokemonEvolutions.length > 0 && (
					<div className='pokemon-evolutions-wrapper'>
						<h3 className='pokemon-subtitle'>Evolutions</h3>
						<div className='pokemon__evolutions'>
							{pokemonEvolutions.map((evolution) => (
								<div className='relative' key={evolution.id}>
									<Link className='expanded-anchor' to={`/${evolution.id}`} />
									<PokemonCard
										key={evolution.id}
										id={evolution.id}
										name={evolution.name}
										types={evolution.types}
										isListView={false}
										favorites={favorites}
										isFavorite={favorites.includes(evolution.id)}
										toggleFavorite={() => toggleFavorite(evolution.id)}
									/>
								</div>
							))}
						</div>
					</div>
				)}
				<div className='btn-back'>
					<Button component={NavLink} to='/'>
						Back to Pokédex
					</Button>
				</div>
			</div>
		</>
	);
};
