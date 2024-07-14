import { PaginationControlsProps } from '../../models/pagination-controls';
import { ArrowLeft, ArrowRight } from '../icons/icons';

export const PaginationControls = ({
	currentPage,
	totalPages,
	onPrevPage,
	onNextPage,
}: PaginationControlsProps) => {
	return (
		<div className='pokemon-grid__controls'>
			{currentPage > 1 && (
				<button className='page-btn' onClick={onPrevPage}>
					<ArrowLeft className='icon-page' />
				</button>
			)}
			<p className='page'>Page {currentPage}</p>
			{currentPage < totalPages && (
				<button className='page-btn' onClick={onNextPage}>
					<ArrowRight className='icon-page' />
				</button>
			)}
		</div>
	);
};
