import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
	EvolutionChain,
	EvolutionDetail,
	EvolutionItem,
} from '../models/pokemon-evolutions';

const getEvolutionChain = async (url: string): Promise<EvolutionChain> => {
	const response = await axios.get(url);
	return response.data;
};

const mapEvolutionChain = async (
	chain: EvolutionDetail
): Promise<EvolutionItem[]> => {
	const evolutions: EvolutionItem[] = [];

	let current: EvolutionDetail | undefined = chain;
	while (current) {
		const id = current.species.url.split('/').slice(-2, -1)[0];
		const name = current.species.name;
		const pokemonData = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${id}`
		);
		const types = pokemonData.data.types;

		evolutions.push({
			id,
			name,
			types,
		});
		current = current.evolves_to[0];
	}

	return evolutions;
};

export const useGetEvolutions = () => {
	const { id } = useParams<{ id: string }>();
	const [pokemonEvolutions, setPokemonEvolutions] = useState<EvolutionItem[]>(
		[]
	);

	useEffect(() => {
		const getInfoForPokemonPage = async () => {
			try {
				const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
				const speciesResponse = await axios.get(speciesUrl);
				const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
				const evolutionChainData = await getEvolutionChain(evolutionChainUrl);
				const mappedEvolutions = await mapEvolutionChain(
					evolutionChainData.chain
				);

				setPokemonEvolutions(mappedEvolutions);
			} catch (error) {
				console.error('Error fetching Pokémon evolution details:', error);
			}
		};

		if (id) {
			getInfoForPokemonPage();
		}
	}, [id]);

	return { pokemonEvolutions };
};
