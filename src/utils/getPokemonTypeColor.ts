export const getPokemonTypeColor = (
	types: { type: { name: string } }[]
): string => {
	if (types.length === 0) return 'var(--color-white)';
	const type = types[0].type.name;
	return `var(--color-${type})`;
};
