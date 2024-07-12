import { useImageUrl } from '../../hooks/useImageUrl';
import { PokemonCardProps } from '../../models/pokemoncarddetails';
import { Socials } from '../socials/Socials';
import '../pokemon-card/pokemon-card.css';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { getPokemonTypeColor } from '../../utils/getPokemonTypeColor';
import { useEffect, useState } from 'react';

export const PokemonCard = (props: PokemonCardProps) => {
	const { id, name, types = [], isListView, favorites } = props;
	const imageUrl = useImageUrl(id);
	const capitalizedName = capitalizeFirstLetter(name);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		setIsFavorite(favorites.includes(id));
	}, [id, favorites]);

	let firstType = '';
	let backgroundColor = '';

	if (types.length > 0) {
		firstType = capitalizeFirstLetter(types[0].type.name);
		backgroundColor = getPokemonTypeColor(types);
	}

	const handleFavoriteToggle = () => {
		const isAlreadyFavorite = favorites.includes(id);
		const updatedFavorites = isAlreadyFavorite
			? favorites.filter((fav) => fav !== id)
			: [...favorites, id];
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		setIsFavorite(!isAlreadyFavorite);
		console.log('Updated favorites:', updatedFavorites);
	};

	const cardStyle = {
		backgroundColor: backgroundColor,
	};

	if (isListView) {
		return (
			<div className='pokemon-card' style={cardStyle}>
				<div className='pokemon-wrapper pokemon-wrapper--list'>
					<div className='image-card-wrapper'>
						<img
							src={imageUrl}
							alt={name}
							className='pokemon-card__image--list'
						/>
					</div>
					<div className='pokemon-card__info pokemon-card__info--list'>
						<h3 className='pokemon__number'>{id}</h3>
						<h2 className='pokemon__name'>{capitalizedName}</h2>
						<p className='pokemon__type'>{firstType}</p>
						<div className='pokemon-card__socials'>
							<Socials
								id={id}
								name={name}
								isFavorite={isFavorite}
								onFavoriteToggle={handleFavoriteToggle}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='pokemon-card' style={cardStyle}>
			<div className='pokemon-wrapper'>
				<div className='pokemon-card__info'>
					<h3 className='pokemon__number'>{id}</h3>
					<h2 className='pokemon__name'>{capitalizedName}</h2>
					<p className='pokemon__type'>{firstType}</p>
				</div>
				<img src={imageUrl} alt={name} className='pokemon-card__image' />
			</div>
			<div className='pokemon-card__socials'>
				<Socials
					id={id}
					name={name}
					isFavorite={isFavorite}
					onFavoriteToggle={handleFavoriteToggle}
				/>
			</div>
		</div>
	);
};
