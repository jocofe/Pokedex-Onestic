import axios from 'axios';
import { useEffect, useState } from 'react';
import { PokemonItem } from '../models/pokemon-list';
import { PokemonViewItem } from '../models/pokemon-view-item';
import { mapPokemonApiToPokemonView } from '../utils/mapPokemonApiToPokemonView';

export const useFetchPokemonSinnoh = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [pokemonList, setPokemonList] = useState<PokemonViewItem[]>([]);

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
						return response.data;
					})
				);

				const mappedPokemonList = pokemonDetails.map(
					mapPokemonApiToPokemonView
				);

				setPokemonList(mappedPokemonList);
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
