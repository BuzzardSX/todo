import type { ReactNode } from 'react';

export { default as Button } from './Button';
export { default as Modal } from './Modal';
export { default as Text } from './Text';
export { default as Theme } from './Theme';

export interface ModalProps {
	children?: ReactNode;
	open: boolean;
}
