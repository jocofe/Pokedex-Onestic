import {
	ButtonHTMLAttributes,
	ComponentType,
	MouseEventHandler,
	MutableRefObject,
	ReactHTML,
	ReactNode,
} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	size?: 'small' | 'default';
	disabled?: boolean;
	color?: 'primary' | 'subprimary' | 'secondary';
	onClick?: MouseEventHandler<HTMLButtonElement>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component?: ComponentType<any> | keyof ReactHTML;
	to?: string;
	href?: string;
	ref?: MutableRefObject<HTMLButtonElement>;
}
