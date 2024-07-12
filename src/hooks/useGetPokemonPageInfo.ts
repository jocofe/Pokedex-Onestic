import { useEffect, useState } from 'react';
import { PokemonItem } from '../models/pokemon-list';
import { useParams } from 'react-router-dom';
import { mapPokemonApiToPokemonView } from '../utils/mapPokemonApiToPokemonView';
import axios from 'axios';

export const useGetPokemonPageInfo = () => {
	const { id } = useParams<{ id: string }>();
	const [pokemonInfo, setPokemonInfo] = useState<PokemonItem | undefined>();

	useEffect(() => {
		const getInfoForPokemonPage = async () => {
			try {
				const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
				const response = await axios.get(apiUrl);
				const mappedPokemonItem = mapPokemonApiToPokemonView(response.data);
				console.log(response.data);
				setPokemonInfo(mappedPokemonItem);
			} catch (error) {
				console.error('Error fetching Pokémon details:', error);
			}
		};

		if (id) {
			getInfoForPokemonPage();
		}
	}, [id]);

	return { pokemonInfo };
};
