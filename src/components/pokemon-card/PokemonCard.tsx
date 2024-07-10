import { useImageUrl } from '../../hooks/useImageUrl';
import { PokemonCardDetails } from '../../models/pokemoncarddetails';
import { Socials } from '../socials/Socials';
import '../pokemon-card/pokemon-card.css';

export const PokemonCard = (props: PokemonCardDetails) => {
	const { pokemonId, pokemonName, pokemonType } = props;
	const imageUrl = useImageUrl(pokemonId);

	return (
		<div className='pokemon-card'>
			<div className='pokemon-wrapper'>
				<div className='pokemon-card__info'>
					<h3 className='pokemon__number'>{pokemonId}</h3>
					<h2 className='pokemon__name'>{pokemonName}</h2>
					<p className='pokemon__type'>{pokemonType}</p>
				</div>
				<img src={imageUrl} alt={pokemonName} className='pokemon-card__image' />
			</div>
			<div className='socials-wrapper'>
				<Socials />
			</div>
		</div>
	);
};
