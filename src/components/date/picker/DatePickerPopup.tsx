import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface DatePickerPopupProps {
	children: ReactNode;
	className?: string;
}

const DatePickerPopup = ({ children, className }: DatePickerPopupProps) => {
	return createPortal(
		<div className={className}>{children}</div>,
		document.body
	);
};

export default DatePickerPopup;
