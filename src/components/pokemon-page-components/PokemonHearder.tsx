import { getPokemonTypeColor } from '../../utils/getPokemonTypeColor';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { PokemonItem } from '../../models/pokemon-list';

export const PokemonHeader = ({ name, id, types }: PokemonItem) => {
	const capitalizedPokemonName = capitalizeFirstLetter(name);
	const headerStyle = {
		backgroundColor: getPokemonTypeColor(types),
	};

	return (
		<div className='pokemon-header' style={headerStyle}>
			<div className='pokemon__title'>
				<h1 className='h3'>{capitalizedPokemonName}</h1>
				<h2 className='h1'>{id}</h2>
			</div>
		</div>
	);
};
