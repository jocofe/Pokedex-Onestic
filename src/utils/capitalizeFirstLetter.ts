export const capitalizeFirstLetter = (
	str: string | { name: string }
): string => {
	if (typeof str === 'string') {
		// Si es un string simple, capitalizar la primera letra y mantener el resto del string
		return str.charAt(0).toUpperCase() + str.slice(1);
	} else if (typeof str === 'object' && str !== null && 'name' in str) {
		// Si es un objeto con una propiedad 'name', capitalizar la primera letra del valor de 'name'
		return str.name.charAt(0).toUpperCase() + str.name.slice(1);
	}
	return '';
};
