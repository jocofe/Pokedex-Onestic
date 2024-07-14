import { PokemonListViewToggleProps } from '../../models/pokemon-view-toggle-props';
import { Button } from '../buttons/Button';
import { ListIcon, GridIcon } from '../icons/icons';

export const PokemonListViewToggle = ({
	isListView,
	onToggle,
}: PokemonListViewToggleProps) => {
	return (
		<Button color='secondary' onClick={onToggle}>
			{isListView ? (
				<GridIcon className='grid-icon' />
			) : (
				<ListIcon className='grid-icon' />
			)}
			{isListView ? 'Grid' : 'List'}
		</Button>
	);
};
