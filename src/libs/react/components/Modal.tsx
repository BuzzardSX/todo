import style from './modal.module.css';
import type { ModalProps } from './reactComponents';

const Modal = ({ children, open }: ModalProps) => {
	const className = `${style.modal} ${open && style.open}`;

	return (
		<div className={className}>
			{children}
		</div>
	);
}

export default Modal;
