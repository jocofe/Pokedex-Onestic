import { useImageUrl } from '../../hooks/useImageUrl';
import { PokemonCardDetails } from '../../models/pokemoncarddetails';
import { Socials } from '../socials/Socials';
import '../pokemon-card/pokemon-card.css';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import classNames from 'classnames';

export const PokemonCard = (props: PokemonCardDetails) => {
	const { pokemonId, pokemonName, pokemonType } = props;
	const imageUrl = useImageUrl(pokemonId);
	const capitalizedPokemonName = capitalizeFirstLetter(pokemonName);

	let firstType = '';
	if (Array.isArray(pokemonType) && pokemonType.length > 0) {
		firstType = capitalizeFirstLetter(pokemonType[0].type.name);
	} else if (typeof pokemonType === 'string') {
		const types = pokemonType.split(',').map((type: string) => type.trim());
		firstType = capitalizeFirstLetter(types[0]);
	}
	const wrapperClass = classNames('pokemon-wrapper', {
		[`background-color--${firstType.toLowerCase()}`]: firstType !== '',
	});

	return (
		<div className='pokemon-card'>
			<div className={wrapperClass}>
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
