import cx from 'classnames';
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
		<div className={cx(style.root, { [style.open]: open }, className)}>
			{children}
		</div>,
		document.body
	);
};

export default DatePickerPopup;
