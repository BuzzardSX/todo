import cx from 'classnames';
import type { ReactNode } from 'react';
import style from './DatePickerPopup.module.css';

interface DatePickerPopupProps {
	children: ReactNode;
	className?: string;
	open: boolean;
}

const DatePickerPopup = ({ children, className, open }: DatePickerPopupProps) => {
	return (
		<div className={cx(style.root, { [style.open]: open }, className)}>
			{children}
		</div>
	);
};

export default DatePickerPopup;
