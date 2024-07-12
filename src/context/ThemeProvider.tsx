import { createContext, ReactNode, useState } from 'react';

type Theme = 'light-mode' | 'dark-mode';

export interface ThemeContextType {
	currentMode: Theme;
	toggleMode: () => void;
}

export interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [currentMode, setCurrentMode] = useState<Theme>('light-mode');

	const toggleMode = () => {
		const newMode = currentMode === 'light-mode' ? 'dark-mode' : 'light-mode';
		setCurrentMode(newMode);
		console.log(newMode);
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
