import classNames from 'classnames';
import type { ReactNode } from 'react';
import style from './button.module.css';

const Button = ({ children, type = 'default' }: ButtonProps) => {
	const className = classNames(style.root, {
		[style.primary]: type == 'primary'
	});

	return (
		<button className={className}>
			{children}
		</button>
	);
}

export type ButtonType = 'default' | 'primary' | 'text';

export interface ButtonProps {
	children: ReactNode;
	type?: ButtonType;
}

export default Button;
