import type { ReactNode } from 'react';

export interface UserAddButonProps {
	onClick: () => {};
}

export interface UserAddModalProps {
	content: ReactNode;
	onClose: () => {};
	onSave: () => {};
	visible: boolean;
}

export { default as UserAddButton } from './addButton';
export { default as UserAddModal } from './addModal';
