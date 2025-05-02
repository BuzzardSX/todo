import cx from 'classnames';
import type { ReactNode } from 'react';
import style from './DatePickerPopup.module.css';

interface DatePickerPopupProps {
	children: ReactNode;
	className?: string;
	onClick: () => void;
	open: boolean;
}

const DatePickerPopup = ({ children, className, onClick, open }: DatePickerPopupProps) => {
	return (
		<div className={cx(style.root, { [style.open]: open }, className)} onClick={onClick}>
			{children}
		</div>
	);
};

export default DatePickerPopup;
