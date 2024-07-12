import React from 'react';
import '../src/styles/App.css';
import '../src/styles/globals.css';
import { Outlet } from 'react-router-dom';
import { TopBar } from './components/topbar/TopBar';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
	return (
		<React.StrictMode>
			<ThemeProvider>
				<TopBar />
				<Outlet />
			</ThemeProvider>
		</React.StrictMode>
	);
}

export default App;
