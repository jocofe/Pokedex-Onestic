import { useImageUrl } from '../../hooks/useImageUrl';
import { PokemonCardProps } from '../../models/pokemoncarddetails';
import { Socials } from '../socials/Socials';
import '../pokemon-card/pokemon-card.css';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export const PokemonCard = (props: PokemonCardProps) => {
	const { pokemonId, pokemonName, pokemonType, isListView, favorites } = props;
	const imageUrl = useImageUrl(pokemonId);
	const capitalizedPokemonName = capitalizeFirstLetter(pokemonName);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		setIsFavorite(favorites.includes(pokemonId));
	}, [pokemonId, favorites]);

	let firstType = '';
	if (pokemonType.length > 0) {
		firstType = capitalizeFirstLetter(pokemonType[0].type.name);
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
		const isAlreadyFavorite = favorites.includes(pokemonId);
		const updatedFavorites = isAlreadyFavorite
			? favorites.filter((fav) => fav !== pokemonId)
			: [...favorites, pokemonId];
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		setIsFavorite(!isAlreadyFavorite);
		console.log('Updated favorites:', updatedFavorites);
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
						pokemonId={pokemonId}
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
				pokemonId={pokemonId}
				pokemonName={pokemonName}
				isFavorite={isFavorite}
				onFavoriteToggle={handleFavoriteToggle}
			/>
		</div>
	);
};
