import { ReactNode } from 'react';

export interface ThemeContextType {
	currentMode: 'light-mode' | 'dark-mode';
	toggleMode: () => void;
}

export interface ThemeProviderProps {
	children: ReactNode;
}
