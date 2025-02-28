import style from './Modal.module.css';
import { ModalProps } from './reactComponents';

const Modal = ({ children }: ModalProps) => (
	<div className={style.modal}>{children}</div>
);

export default Modal;
