import classNames from 'classnames';
import type { ReactNode } from 'react';
import style from './button.module.css';

const Button = ({
	children,
	type = 'default'
}: ButtonProps) => (
	<button className={classNames(style.root, { [style.primary]: type == 'primary' })}>
		{children}
	</button>
);

export type ButtonType = 'default' | 'primary';

export interface ButtonProps {
	children: ReactNode;
	type?: ButtonType;
}

export default Button;
