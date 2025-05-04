import type { ReactNode } from 'react';
import style from './modal.module.css';

const Modal = ({ children, open }: ModalProps) => {
	const className = `${style.root} ${open && style.open}`;

	return (
		<div className={className}>
			{children}
		</div>
	);
}

interface ModalProps {
	children?: ReactNode;
	open: boolean;
}

export default Modal;
