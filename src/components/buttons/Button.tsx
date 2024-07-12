import classNames from 'classnames';
import { ButtonProps } from '../../models/button';
import '../buttons/button.css';

export const Button = ({
	className = '',
	component = 'button',
	size = 'default',
	disabled,
	color = 'primary',
	type = 'button',
	children,
	onClick,
	...rest
}: ButtonProps) => {
	const btnClass = classNames({
		btn: true,
		[className]: className,
		[`btn--${size}`]: size,
		[`btn--${color}`]: color,
		'btn--disabled': disabled,
	});

	const Component = component;
	return (
		<Component
			className={btnClass}
			type={type}
			disabled={disabled}
			onClick={onClick}
			{...rest}>
			{children}
		</Component>
	);
};
