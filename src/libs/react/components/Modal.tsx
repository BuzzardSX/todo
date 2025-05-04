import cx from 'classnames';
import type { ReactNode } from 'react';
import style from './modal.module.css';

const Modal = ({ children, open }: ModalProps) => (
	<div className={cx(style.root, { [style.open]: open })}>
		{children}
	</div>
);

interface ModalProps {
	children?: ReactNode;
	open: boolean;
}

export default Modal;
