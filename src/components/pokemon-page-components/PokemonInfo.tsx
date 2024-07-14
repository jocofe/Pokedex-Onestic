import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { PokemonItem } from '../../models/pokemon-list';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

export const PokemonInfo = ({ height, weight, types }: PokemonItem) => {
	const capitalizedTypes = types.map((type) =>
		capitalizeFirstLetter(type.type.name)
	);
	const themeContext = useContext(ThemeContext);

	return (
		<div
			className={
				themeContext?.currentMode === 'dark-mode'
					? 'pokemon-info--dark'
					: 'pokemon-info'
			}>
			<div className='pokemon__types'>
				{capitalizedTypes.map((type, index) => (
					<span key={index} className={`type type--${types[index].type.name}`}>
						{type}
					</span>
				))}
			</div>
			<div className='pokemon__characteristics'>
				<div
					className={
						themeContext?.currentMode === 'dark-mode'
							? 'pokemon__height--dark'
							: 'pokemon__height'
					}>
					<h4>Height</h4> <span className='pokemon-height'>{height}</span>
				</div>
				<div
					className={
						themeContext?.currentMode === 'dark-mode'
							? 'separator--dark'
							: 'separator'
					}></div>
				<div
					className={
						themeContext?.currentMode === 'dark-mode'
							? 'pokemon__weight--dark'
							: 'pokemon__weight'
					}>
					<h4>Weight</h4> <span className='pokemon-weight'>{weight}</span>
				</div>
			</div>
		</div>
	);
};
