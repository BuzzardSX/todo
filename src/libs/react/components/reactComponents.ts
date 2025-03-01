import type { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
}

export interface ModalProps {
	children?: ReactNode;
	open: boolean;
}
