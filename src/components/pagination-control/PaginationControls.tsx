import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { PaginationControlsProps } from '../../models/pagination-controls';
import { ArrowLeft, ArrowRight } from '../icons/icons';

export const PaginationControls = ({
	currentPage,
	totalPages,
	onPrevPage,
	onNextPage,
}: PaginationControlsProps) => {
	const themeContext = useContext(ThemeContext);

	return (
		<div className='pokemon-grid__controls'>
			{currentPage > 1 && (
				<button className='page-btn' onClick={onPrevPage}>
					<ArrowLeft className='icon-page' />
				</button>
			)}
			<p
				className={
					themeContext?.currentMode === 'dark-mode' ? 'page--dark' : 'page'
				}>
				Page {currentPage}
			</p>
			{currentPage < totalPages && (
				<button className='page-btn' onClick={onNextPage}>
					<ArrowRight className='icon-page' />
				</button>
			)}
		</div>
	);
};
