import { useState } from 'react';
import { Heart, FullHeart, CopyLink } from '../icons/icons';
import { SocialsProps } from '../../models/socials';
import { Toaster } from '../toaster/Toaster';

export const Socials = (props: SocialsProps) => {
	const { pokemonId } = props;
	const [isFav, setIsFav] = useState(false);
	const [isLinkCopied, setIsLinkCopied] = useState(false);

	const handleFav = async (event: React.MouseEvent<HTMLElement>) => {
		event?.preventDefault();
		setIsFav(true);
	};

	const copyArtworkLink = () => {
		if (!navigator.clipboard) {
			console.error('Clipboard API not supported');
			return;
		}
		const baseUrl = window.location.origin;
		const copiedUrl = `${baseUrl}/${pokemonId}`;
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
				<div onClick={handleFav} className='icon-wrapper button-icon'>
					{isFav ? <FullHeart className='icon' /> : <Heart className='icon' />}
				</div>
			</div>
			{isLinkCopied && (
				<Toaster
					message='Copied Link!'
					onClose={() => setIsLinkCopied(false)}
				/>
			)}
		</>
	);
};
