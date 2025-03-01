import type { ReactNode } from 'react';

export { default as Button } from './Button';
export { default as Modal } from './Modal';

export interface ModalProps {
	children?: ReactNode;
	open: boolean;
}
