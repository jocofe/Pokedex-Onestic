import { useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export const useApplyTheme = () => {
	const themeContext = useContext(ThemeContext);

	const applyTheme = useCallback((mode: string) => {
		const pageElement = document.querySelector(
			'.pokemon-section'
		) as HTMLElement;
		const titleElements = document.querySelectorAll(
			'.pokemon__height, .pokemon__weight, .pokemon-stats, .pokemon-subtitle, .pokemon-stat__name'
		) as NodeListOf<HTMLElement>;
		const infoElement = document.querySelector('.pokemon-info') as HTMLElement;
		const separatorElements = document.querySelectorAll(
			'.separator'
		) as NodeListOf<HTMLElement>;
		const pageElements = document.getElementsByClassName(
			'page'
		) as HTMLCollectionOf<HTMLElement>;

		if (pageElement) {
			if (mode === 'dark-mode') {
				pageElement.style.backgroundColor = 'var(--color-blackball)';
				titleElements.forEach((element) => {
					element.style.color = 'var(--color-white)';
				});
				if (infoElement) {
					infoElement.style.backgroundColor = 'var(--color-blackball)';
				}
				separatorElements.forEach((element) => {
					element.style.backgroundColor = 'var(--color-white)';
				});
			} else {
				pageElement.style.backgroundColor = 'var(--color-white)';
				titleElements.forEach((element) => {
					element.style.color = 'var(--color-blackball)';
				});
				if (infoElement) {
					infoElement.style.backgroundColor = 'var(--color-white)';
				}
				separatorElements.forEach((element) => {
					element.style.backgroundColor = 'var(--color-blackball)';
				});
			}
			if (mode === 'dark-mode') {
				Array.from(pageElements).forEach(
					(element) => (element.style.color = 'var(--color-white)')
				);
			} else {
				Array.from(pageElements).forEach(
					(element) => (element.style.color = 'var(--color-blackball)')
				);
			}
		}
	}, []);

	useEffect(() => {
		if (themeContext) {
			applyTheme(themeContext.currentMode);
		}
	}, [themeContext, applyTheme]);

	return applyTheme;
};
