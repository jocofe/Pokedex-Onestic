import classNames from 'classnames';
import { Searchglass } from '../icons/icons';
import { SearchBarProps } from '../../models/searchbar';
import '../searchbar/searchbar.css';

export const SearchBar = ({ placeholder = 'Search' }: SearchBarProps) => {
	const searchBarClass = classNames('searchbar');

	return (
		<form className='searchbar-wrapper'>
			<input className={searchBarClass} placeholder={placeholder} />
			<Searchglass className='icon--absolute' />
		</form>
	);
};
