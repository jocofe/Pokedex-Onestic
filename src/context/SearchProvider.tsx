import { createContext, useState, ReactNode } from 'react';
import { SearchContextProps } from '../models/search-context';

export const SearchContext = createContext<SearchContextProps | undefined>(
	undefined
);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
			{children}
		</SearchContext.Provider>
	);
};
