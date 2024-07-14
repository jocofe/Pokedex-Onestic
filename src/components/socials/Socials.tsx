import { useState, useContext } from 'react';
import { Heart, FullHeart, CopyLink } from '../icons/icons';
import { SocialsProps } from '../../models/socials';
import { Toaster } from '../toaster/Toaster';
import '../socials/socials.css';
import { FavoritesContext } from '../../context/FavoriteProvider';

export const Socials = (props: SocialsProps) => {
	const { id } = props;
	const { favorites, toggleFavorite } = useContext(FavoritesContext);
	const [isLinkCopied, setIsLinkCopied] = useState(false);

	const isFavorite = id !== undefined && favorites.includes(String(id));

	const copyArtworkLink = () => {
		if (!navigator.clipboard) {
			console.error('Clipboard API not supported');
			return;
		}
		const baseUrl = window.location.origin;
		const copiedUrl = `${baseUrl}/${id}`;
		navigator.clipboard
			.writeText(copiedUrl)
			.then(() => {
				setIsLinkCopied(true);
				setTimeout(() => {
					setIsLinkCopied(false);
				}, 3000);
			})
			.catch((error) => {
				console.error('Error copying link:', error);
			});
	};

	const handleFavoriteToggle = () => {
		if (id) {
			toggleFavorite(String(id));
		}
	};

	return (
		<>
			<div className='socials-wrapper'>
				<div onClick={copyArtworkLink} className='icon-wrapper'>
					<CopyLink className='icon' />
				</div>
				<div
					onClick={handleFavoriteToggle}
					className='icon-wrapper button-icon'>
					{isFavorite ? (
						<FullHeart className='icon' />
					) : (
						<Heart className='icon' />
					)}
				</div>
			</div>
			{isLinkCopied && (
				<Toaster
					message='Link copied!'
					onClose={() => setIsLinkCopied(false)}
				/>
			)}
		</>
	);
};
