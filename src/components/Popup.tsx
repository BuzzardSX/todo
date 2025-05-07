import cx from 'classnames';
import type { ReactNode } from 'react';
import style from './Popup.module.css';

interface PopupProps {
	children: ReactNode;
	className?: string;
	onClick: () => void;
	open: boolean;
}

const Popup = ({ children, className, onClick, open }: PopupProps) => (
	<div className={cx(style.root, { [style.open]: open }, className)} onClick={onClick}>
		{children}
	</div>
);

export default Popup;
