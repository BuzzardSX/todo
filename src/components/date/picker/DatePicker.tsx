import type { ReactNode } from 'react';
import style from './DatePicker.module.css';

type DatePickerSize = 'large' | 'middle' | 'small';

interface DatePickerProps {
	className?: string;
	placeholder?: string;
	size?: DatePickerSize;
	suffix?: ReactNode;
}

const DatePicker = ({
	className,
	placeholder,
	size = 'middle',
	suffix = null
}: DatePickerProps) => (
	<input className={style.root} placeholder={placeholder} />
);

export default DatePicker;
