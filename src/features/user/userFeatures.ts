import { lazy, type ReactNode } from 'react';

export interface UserAddButonProps {
	onClick: () => void;
}

export interface UserAddModalProps {
	content: ReactNode;
	onClose: () => void;
	onSave: () => void;
	visible: boolean;
}

export const UserAddButton = lazy(() => import('./addButton'));

export { default as UserAddModal } from './addModal';
