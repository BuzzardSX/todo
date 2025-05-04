import cx from 'classnames';
import type { ReactNode } from 'react';
import style from './button.module.css';

const Button = ({ children, danger = false, type = 'default' }: ButtonProps) => {
	const className = cx(style.root, {
		[style.danger]: danger,
		[style.primary]: type == 'primary',
	});

	return (
		<button className={className}>
			{children}
		</button>
	);
}

export type ButtonType = 'default' | 'link' | 'primary' | 'text';

export interface ButtonProps {
	children: ReactNode;
	danger?: boolean;
	type?: ButtonType;
}

export default Button;
