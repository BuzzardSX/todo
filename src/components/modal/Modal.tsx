import cx from 'classnames';
import type { ReactNode } from 'react';
import style from './Modal.module.css';

interface ModalProps {
	children?: ReactNode;
	open: boolean;
}

const Modal = ({ children, open }: ModalProps) => (
	<div className={cx(style.root, { [style.open]: open })}>
		{children}
	</div>
);

export default Modal;
