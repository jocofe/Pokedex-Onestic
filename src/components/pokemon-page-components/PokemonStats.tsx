import { PokemonItem } from '../../models/pokemon-list';

export const PokemonStats = ({ stats }: PokemonItem) => {
	const maxStatValue = 252;

	return (
		<div className='pokemon-stats'>
			<h3 className='pokemon-subtitle'>Stats</h3>
			<div className='stats-wrapper'>
				{stats?.map((stat) => (
					<div className='pokemon__stat' key={stat.stat.name}>
						<h4 className='pokemon-stat__name'>{stat.stat.name}</h4>
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
