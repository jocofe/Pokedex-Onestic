import axios from 'axios';
import { useEffect, useState } from 'react';
import { PokemonItem } from '../models/pokemon-list';

export const useFetchPokemonSinnoh = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [pokemonList, setPokemonList] = useState<PokemonItem[]>([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			setIsLoading(true);
			try {
				const sinnohIds = Array.from(
					{ length: 107 },
					(_, index) => 387 + index
				);

				const pokemonDetails = await Promise.all(
					sinnohIds.map(async (id) => {
						const response = await axios.get<PokemonItem>(
							`https://pokeapi.co/api/v2/pokemon/${id}`
						);
						console.log(response);
						return response.data;
					})
				);

				setPokemonList(pokemonDetails);
			} catch (err) {
				setError('Failed to fetch pokemon data');
			} finally {
				setIsLoading(false);
			}
		};

		fetchPokemon();
	}, []);

	return { pokemonList, error, isLoading };
};
