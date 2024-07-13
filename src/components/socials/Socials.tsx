import { useState, useEffect } from 'react';
import { Heart, FullHeart, CopyLink } from '../icons/icons';
import { SocialsProps } from '../../models/socials';
import { Toaster } from '../toaster/Toaster';
import '../socials/socials.css';

export const Socials = (props: SocialsProps) => {
	const { id, isFavorite: propIsFavorite, onFavoriteToggle } = props;
	const [isFavorite, setIsFavorite] = useState(propIsFavorite);
	const [isLinkCopied, setIsLinkCopied] = useState(false);

	useEffect(() => {
		setIsFavorite(propIsFavorite);
	}, [propIsFavorite]);

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

	return (
		<>
			<div className='socials-wrapper'>
				<div onClick={copyArtworkLink} className='icon-wrapper'>
					<CopyLink className='icon' />
				</div>
				<div onClick={onFavoriteToggle} className='icon-wrapper button-icon'>
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
