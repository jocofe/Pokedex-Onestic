import { useContext } from 'react';
import { PokemonItem } from '../../models/pokemon-list';
import { ThemeContext } from '../../context/ThemeProvider';

export const PokemonStats = ({ stats }: PokemonItem) => {
	const maxStatValue = 252;
	const themeContext = useContext(ThemeContext);

	return (
		<div className='pokemon-stats'>
			<h3
				className={
					themeContext?.currentMode === 'dark-mode'
						? 'pokemon__subtitle--dark'
						: 'pokemon__subtitle'
				}>
				Stats
			</h3>
			<div className='stats-wrapper'>
				{stats?.map((stat) => (
					<div className='pokemon__stat' key={stat.stat.name}>
						<h4
							className={
								themeContext?.currentMode === 'dark-mode'
									? 'pokemon-stat__name--dark'
									: 'pokemon-stat__name'
							}>
							{stat.stat.name}
						</h4>
						<div className='stat-bar'>
							<div
								className='stat-bar__fill'
								style={{
									width: `${(stat.base_stat / maxStatValue) * 100}%`,
								}}>
								{stat.base_stat}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
