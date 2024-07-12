import { useEffect, useState } from 'react';
import { useGetPokemonPageInfo } from '../../hooks/useGetPokemonPageInfo';
import { Loading } from '../../components/icons/icons';
import { Button } from '../../components/buttons/Button';
import '../pokemon-page/pokemonpage.css';
import { getPokemonTypeColor } from '../../utils/getPokemonTypeColor';

export const PokemonPage = () => {
	const { pokemonInfo } = useGetPokemonPageInfo();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (pokemonInfo) setIsLoading(false);
	}, [pokemonInfo]);

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

	const headerStyle = {
		backgroundColor: getPokemonTypeColor(pokemonInfo.types),
	};

	return (
		<>
			<div className='pokemon-section'>
				<div className='pokemon-header' style={headerStyle}>
					<div className='pokemon__title'>
						<h1 className='h3'>{pokemonInfo.name}</h1>
						<h2 className='h1'>{pokemonInfo.id}</h2>
					</div>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
						alt={pokemonInfo.name}
						className='pokemon-img'
					/>
				</div>
				<div className='pokemon-info'>
					<div className='pokemon__types'>
						{pokemonInfo.types.map((type, index) => (
							<span key={index} className={`type type--${type.type.name}`}>
								{type.type.name}
							</span>
						))}
					</div>
					<div className='pokemon__characteristics'>
						<div className='pokemon__height'>Height: {pokemonInfo.height}</div>
						<div className='pokemon__weight'>Weight: {pokemonInfo.weight}</div>
					</div>
				</div>
				<div className='pokemon-stats'>
					<h3>Stats</h3>
					<div className='stats-wrapper'>
						{pokemonInfo.stats.map((stat) => (
							<div className='pokemon__stat' key={stat.stat.name}>
								<h4>{stat.stat.name}</h4>
								<div className='stat-bar'>
									<div
										className='stat-bar__fill'
										style={{ width: `${stat.base_stat}%` }}>
										{stat.base_stat}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='btn-back'>
					<Button>Back to Pokédex</Button>
				</div>
			</div>
		</>
	);
};
