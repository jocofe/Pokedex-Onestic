import { Searchglass } from '../icons/icons';
import { SearchBarProps } from '../../models/searchbar';
import '../searchbar/searchbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({
	placeholder = 'Search',
	setSearchTerm,
}: SearchBarProps) => {
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchTerm(inputValue);
		navigate('/');
	};

	return (
		<form className='searchbar-wrapper' onSubmit={handleSubmit}>
			<input
				className='searchbar'
				placeholder={placeholder}
				value={inputValue}
				onChange={handleInputChange}
			/>
			<Searchglass className='icon--absolute' />
		</form>
	);
};
