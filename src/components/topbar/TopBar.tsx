import { useContext, useEffect } from 'react';
import { Logotype, MoonIcon, Sun } from '../icons/icons';
import { ThemeContext } from '../../context/ThemeProvider';
import { Link } from 'react-router-dom';
import { SearchBar } from '../searchbar/SearchBar';
import '../topbar/topbar.css';
import { Button } from '../buttons/Button';

export const TopBar = () => {
	const themeContext = useContext(ThemeContext);

	if (!themeContext) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	const { currentMode, toggleMode } = themeContext;

	const icon =
		currentMode === 'light-mode' ? (
			<MoonIcon className='switch-icon' />
		) : (
			<Sun className='switch-icon switch-icon--light' />
		);

	useEffect(() => {
		document.body.style.backgroundColor =
			currentMode === 'dark-mode'
				? 'var(--color-blackball)'
				: 'var(--color-white)';
	}, [currentMode]);

	return (
		<div className={`topbar ${currentMode}`}>
			<div className='topbar__logo'>
				<Link to='/'>
					<Logotype className='logotype' />
				</Link>
			</div>
			<SearchBar placeholder='Search' />
			<Button className='switch-icon' onClick={toggleMode}>
				{icon}
			</Button>
		</div>
	);
};
