import { PokemonItem } from '../../models/pokemon-list';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

export const PokemonInfo = ({ height, weight, types }: PokemonItem) => {
	const capitalizedTypes = types.map((type) =>
		capitalizeFirstLetter(type.type.name)
	);

	return (
		<div className='pokemon-info'>
			<div className='pokemon__types'>
				{capitalizedTypes.map((type, index) => (
					<span key={index} className={`type type--${types[index].type.name}`}>
						{type}
					</span>
				))}
			</div>
			<div className='pokemon__characteristics'>
				<div className='pokemon__height'>
					<h4>Height</h4> <span className='pokemon-height'>{height}</span>
				</div>
				<div className='separator'></div>
				<div className='pokemon__weight'>
					<h4>Weight</h4> <span className='pokemon-weight'>{weight}</span>
				</div>
			</div>
		</div>
	);
};
