import { createContext, useState } from 'react';
import { ThemeContextType, ThemeProviderProps } from '../models/theme-provider';

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [currentMode, setCurrentMode] = useState<'light-mode' | 'dark-mode'>(
		'light-mode'
	);

	const toggleMode = () => {
		const newMode = currentMode === 'light-mode' ? 'dark-mode' : 'light-mode';
		setCurrentMode(newMode);
	};

	const themeContextValue: ThemeContextType = {
		currentMode,
		toggleMode,
	};

	return (
		<ThemeContext.Provider value={themeContextValue}>
			{children}
		</ThemeContext.Provider>
	);
};
