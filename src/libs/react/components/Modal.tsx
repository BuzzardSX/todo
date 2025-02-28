import { ModalProps } from './reactComponents';
import style from './Modal.module.css';

const Modal = ({ children }: ModalProps) => (
	<div className={style.modal}>{children}</div>
);

export default Modal;
