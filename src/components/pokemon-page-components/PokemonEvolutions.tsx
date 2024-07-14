import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoriteProvider';
import { PokemonCard } from '../../components/pokemon-card/PokemonCard';
import { PokemonEvolutionsProps } from '../../models/pokemon-evolutions';

export const PokemonEvolutions = ({ evolutions }: PokemonEvolutionsProps) => {
	const { favorites, toggleFavorite } = useContext(FavoritesContext);

	if (evolutions.length === 0) return null;

	return (
		<div className='pokemon-evolutions-wrapper'>
			<h3 className='pokemon-subtitle'>Evolutions</h3>
			<div className='pokemon__evolutions'>
				{evolutions.map((evolution) => (
					<div className='relative' key={evolution.id}>
						<Link className='expanded-anchor' to={`/${evolution.id}`} />
						<PokemonCard
							key={evolution.id}
							id={evolution.id}
							name={evolution.name}
							types={evolution.types}
							isListView={false}
							isFavorite={favorites.includes(evolution.id)}
							toggleFavorite={() => toggleFavorite(evolution.id)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
