import { useImageUrl } from '../../hooks/useImageUrl';
import { PokemonCardProps } from '../../models/pokemoncarddetails';
import { Socials } from '../socials/Socials';
import '../pokemon-card/pokemon-card.css';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export const PokemonCard = (
	props: PokemonCardProps & { isListView: boolean }
) => {
	const { pokemonId, pokemonName, pokemonType, isListView } = props;
	const imageUrl = useImageUrl(pokemonId);
	const capitalizedPokemonName = capitalizeFirstLetter(pokemonName);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
		setIsFavorite(favorites.includes(pokemonId.toString()));
	}, [pokemonId]);

	let firstType = '';
	if (Array.isArray(pokemonType) && pokemonType.length > 0) {
		firstType = capitalizeFirstLetter(pokemonType[0].type.name);
	} else if (typeof pokemonType === 'string') {
		const types = pokemonType.split(',').map((type: string) => type.trim());
		firstType = capitalizeFirstLetter(types[0]);
	}

	const cardClass = classNames('pokemon-card', {
		'pokemon-card--list': isListView,
	});
	const wrapperClass = classNames('pokemon-wrapper', {
		[`background-color--${firstType.toLowerCase()}`]: firstType !== '',
		'pokemon-wrapper--list': isListView,
	});
	const infoClass = classNames('pokemon-card__info', {
		'pokemon-card__info--list': isListView,
	});

	const handleFavoriteToggle = () => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
		if (isFavorite) {
			const updatedFavorites = favorites.filter(
				(fav: string) => fav !== pokemonId.toString()
			);
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		} else {
			localStorage.setItem(
				'favorites',
				JSON.stringify([...favorites, pokemonId.toString()])
			);
		}
		setIsFavorite((prevIsFavorite) => !prevIsFavorite);
		console.log(localStorage);
	};

	if (isListView) {
		return (
			<div className={cardClass}>
				<div className={wrapperClass}>
					<img
						src={imageUrl}
						alt={pokemonName}
						className='pokemon-card__image'
					/>
				</div>
				<div className={infoClass}>
					<h3 className='pokemon__number'>{pokemonId}</h3>
					<h2 className='pokemon__name'>{capitalizedPokemonName}</h2>
					<p className='pokemon__type'>{firstType}</p>
					<Socials
						pokemonName={pokemonName}
						isFavorite={isFavorite}
						onFavoriteToggle={handleFavoriteToggle}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className={cardClass}>
			<div className={wrapperClass}>
				<div className={infoClass}>
					<h3 className='pokemon__number'>{pokemonId}</h3>
					<h2 className='pokemon__name'>{capitalizedPokemonName}</h2>
					<p className='pokemon__type'>{firstType}</p>
				</div>
				<img src={imageUrl} alt={pokemonName} className='pokemon-card__image' />
			</div>
			<Socials
				pokemonName={pokemonName}
				isFavorite={isFavorite}
				onFavoriteToggle={handleFavoriteToggle}
			/>
		</div>
	);
};
