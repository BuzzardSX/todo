import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface DatePickerPopupProps {
	children: ReactNode;
}

const DatePickerPopup = ({ children }: DatePickerPopupProps) => {
	return createPortal(<div>{children}</div>, document.body);
};

export default DatePickerPopup;
