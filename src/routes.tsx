import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './views/home/Home';
import { PokemonPage } from './views/pokemon-page/PokemonPage';
import { Favourites } from './views/favourites/Favourites';

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
				element: <Favourites />,
			},
		],
	},
]);
