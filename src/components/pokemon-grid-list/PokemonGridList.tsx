import { useState } from 'react';
import { useFetchPokemonSinnoh } from '../../hooks/useFetchPokemonSinnoh';
import { PokemonCard } from '../pokemon-card/PokemonCard';
import { PokemonItem } from '../../models/pokemon-list';
import '../pokemon-grid-list/pokemongridlist.css';

export const PokemonGridList = () => {
	const [page, setPage] = useState(1);
	const { pokemonList, error, isLoading } = useFetchPokemonSinnoh();

	const handleNextPage = () => setPage((prevPage) => prevPage + 1);
	const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

	return (
		<div className='pokemon-grid-wrapper'>
			<div className='pokemon-grid'>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{!isLoading &&
					!error &&
					pokemonList.map((pokemon: PokemonItem) => (
						<PokemonCard
							key={pokemon.id}
							pokemonId={pokemon.id.toString()}
							pokemonName={pokemon.name}
							pokemonType={pokemon.types
								.map((typeInfo) => typeInfo.type.name)
								.join(', ')}
						/>
					))}
			</div>
			<div className='pagination-controls'>
				<button onClick={handlePrevPage} disabled={page === 1}>
					Previous
				</button>
				<button onClick={handleNextPage}>Next</button>
			</div>
		</div>
	);
};
