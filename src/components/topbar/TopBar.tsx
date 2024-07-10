import classNames from 'classnames';
import { Logotype, MoonIcon } from '../icons/icons';
import { TopBarProps } from '../../models/topbar';
import { Link } from 'react-router-dom';
import { SearchBar } from '../searchbar/SearchBar';
import '../topbar/topbar.css';

export const TopBar = ({ mode = 'light-mode' }: TopBarProps) => {
	const topBarClass = classNames('topbar', `topbar--${mode}`);

	return (
		<div className={topBarClass}>
			<div className='topbar__logo'>
				<Link to={'/'}>
					<Logotype className='logotype' />
				</Link>
			</div>
			<SearchBar placeholder={'Search'} />
			<MoonIcon className='switch-icon' />
		</div>
	);
};
