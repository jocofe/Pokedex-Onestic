import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
