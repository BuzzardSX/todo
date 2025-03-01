import type { ReactNode } from 'react';

export { default as Button } from './Button';
export { default as Modal } from './Modal';

type ButtonType = 'default' | 'primary';

export interface ButtonProps {
	children: ReactNode;
	type: ButtonType;
}

export interface ModalProps {
	children?: ReactNode;
	open: boolean;
}
