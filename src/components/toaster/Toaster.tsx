import { useEffect, useState } from 'react';
import { Logotype } from '../icons/icons';
import { ToasterProps } from '../../models/toaster';
import '../toaster/toaster.css';

export const Toaster = ({ message, time = 3000, onClose }: ToasterProps) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setIsActive(true);
		const timer = setTimeout(() => {
			setIsActive(false);
			setTimeout(onClose, 500);
		}, time);

		return () => clearTimeout(timer);
	}, [time, onClose]);

	return (
		<div className={`toast ${isActive ? 'active' : ''}`}>
			<div className='toast-content'>
				<Logotype />
				<span className='message'>{message}</span>
			</div>
			<div className={`progress ${isActive ? 'active' : ''}`}></div>
		</div>
	);
};
