import type { ReactNode } from 'react';

export { default as EditableText } from './EditableText';
export { default as Modal } from './Modal';
export { default as Theme } from './Theme';

export interface ModalProps {
	children?: ReactNode;
	open: boolean;
}
