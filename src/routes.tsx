import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './views/home/Home';
import { PokemonPage } from './views/pokemon-page/PokemonPage';
import { Favorites } from './views/favorites/Favorites';

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/:id',
				element: <PokemonPage />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
		],
	},
]);
