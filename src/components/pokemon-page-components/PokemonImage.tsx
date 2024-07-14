import { PokemonItem } from '../../models/pokemon-list';

export const PokemonImage = ({ id, name }: PokemonItem) => (
	<div className='img-wrapper'>
		<img
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
			alt={name}
			className='pokemon-img'
		/>
	</div>
);
