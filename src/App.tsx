import React from 'react';
import '../src/styles/App.css';
import '../src/styles/globals.css';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<React.StrictMode>
			<Outlet />
		</React.StrictMode>
	);
}

export default App;
