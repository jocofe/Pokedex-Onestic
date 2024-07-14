import { Link } from 'react-router-dom';
import { PokemonCard } from '../../components/pokemon-card/PokemonCard';
import { PokemonEvolutionsProps } from '../../models/pokemon-evolutions';

export const PokemonEvolutions = ({
	evolutions,
	favorites,
	toggleFavorite,
}: PokemonEvolutionsProps) => {
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
							favorites={[]}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
