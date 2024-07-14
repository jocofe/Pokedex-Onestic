import { useMemo } from 'react';

interface UsePaginationProps<Pokemon> {
	items: Pokemon[];
	currentPage: number;
	itemsPerPage: number;
}

interface UsePaginationResult<Pokemon> {
	paginatedItems: Pokemon[];
	totalPages: number;
}

export const usePagination = <Pokemon>({
	items,
	currentPage,
	itemsPerPage,
}: UsePaginationProps<Pokemon>): UsePaginationResult<Pokemon> => {
	const totalItems = items.length;
	const totalPages = useMemo(
		() => Math.ceil(totalItems / itemsPerPage),
		[totalItems, itemsPerPage]
	);

	const startIndex = useMemo(
		() => (currentPage - 1) * itemsPerPage,
		[currentPage, itemsPerPage]
	);
	const endIndex = useMemo(
		() => startIndex + itemsPerPage,
		[startIndex, itemsPerPage]
	);

	const paginatedItems = useMemo(
		() => items.slice(startIndex, endIndex),
		[items, startIndex, endIndex]
	);

	return {
		paginatedItems,
		totalPages,
	};
};
