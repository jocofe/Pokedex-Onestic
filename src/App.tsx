import React from 'react';
import '../src/styles/App.css';
import '../src/styles/globals.css';
import { Outlet } from 'react-router-dom';
import { TopBar } from './components/topbar/TopBar';
import { ThemeProvider } from './context/ThemeProvider';
import { FavoritesProvider } from './context/FavoriteProvider';
import { SearchProvider } from './context/SearchProvider';

function App() {
	return (
		<React.StrictMode>
			<FavoritesProvider>
				<ThemeProvider>
					<SearchProvider>
						<TopBar />
						<Outlet />
					</SearchProvider>
				</ThemeProvider>
			</FavoritesProvider>
		</React.StrictMode>
	);
}

export default App;
