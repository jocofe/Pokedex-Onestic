export interface UsePaginationProps<Pokemon> {
	items: Pokemon[];
	currentPage: number;
	itemsPerPage: number;
}

export interface UsePaginationResult<Pokemon> {
	paginatedItems: Pokemon[];
	totalPages: number;
}
