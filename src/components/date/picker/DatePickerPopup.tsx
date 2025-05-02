import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import style from './DatePickerPopup.module.css';

interface DatePickerPopupProps {
	children: ReactNode;
	className?: string;
	open: boolean;
}

const DatePickerPopup = ({ children, className, open }: DatePickerPopupProps) => {
	return createPortal(
		<div className={`${style.root} ${open ? style.open : ''} ${className}`}>
			{children}
		</div>,
		document.body
	);
};

export default DatePickerPopup;
