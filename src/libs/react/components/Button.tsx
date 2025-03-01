import type { ReactNode } from 'react';
import style from './button.module.css';

const Button = ({
	children,
	type = 'default'
}: ButtonProps) => {
	const className = [
		style.button,
		type == 'primary' && style.primary
	].join(' ');

	return (
		<button className={className}>
			{children}
		</button>
	);
};

export type ButtonType = 'default' | 'primary';

export interface ButtonProps {
	children: ReactNode;
	type?: ButtonType;
}

export default Button;
