export const useImageUrl = (pokemonId: string): string => {
	const constructImageUrl = (pokemonId: string) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
	};

	return constructImageUrl(pokemonId);
};
