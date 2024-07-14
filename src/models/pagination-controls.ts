export interface PaginationControlsProps {
	currentPage: number;
	totalPages: number;
	onPrevPage: () => void;
	onNextPage: () => void;
}
