import { useImageUrl } from '../../hooks/useImageUrl';
import { PokemonCardDetails } from '../../models/pokemoncarddetails'; // Asegúrate de importar PokemonType si aún no lo has hecho
import { Socials } from '../socials/Socials';
import '../pokemon-card/pokemon-card.css';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

export const PokemonCard = (props: PokemonCardDetails) => {
	const { pokemonId, pokemonName, pokemonType } = props;
	const imageUrl = useImageUrl(pokemonId);

	// Capitalizar el nombre del Pokémon
	const capitalizedPokemonName = capitalizeFirstLetter(pokemonName);

	// Obtener el primer tipo del Pokémon y capitalizarlo si existe
	let firstType = '';
	if (pokemonType.length > 0) {
		const type = pokemonType[0];
		if (
			typeof type === 'object' &&
			type !== null &&
			'type' in type &&
			'name' in type.type
		) {
			firstType = capitalizeFirstLetter(type.type.name);
		}
	}

	return (
		<div className='pokemon-card'>
			<div className='pokemon-wrapper'>
				<div className='pokemon-card__info'>
					<h3 className='pokemon__number'>{pokemonId}</h3>
					<h2 className='pokemon__name'>{capitalizedPokemonName}</h2>
					<p className='pokemon__type'>{firstType}</p>
				</div>
				<img src={imageUrl} alt={pokemonName} className='pokemon-card__image' />
			</div>
			<div className='pokemon__socials'>
				<Socials />
			</div>
		</div>
	);
};
