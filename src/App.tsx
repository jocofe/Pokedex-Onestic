import React from 'react';
import '../src/styles/App.css';
import '../src/styles/globals.css';
import { Outlet } from 'react-router-dom';
import { TopBar } from './components/topbar/TopBar';

function App() {
	return (
		<React.StrictMode>
			<TopBar mode={'light-mode'} />
			<Outlet />
		</React.StrictMode>
	);
}

export default App;
