import type { ReactNode } from 'react';
import style from './DatePicker.module.css';

type DatePickerSize = 'large' | 'middle' | 'small';

interface DatePickerProps {
	placeholder?: string;
	size?: DatePickerSize;
	suffix?: ReactNode;
}

const DatePicker = ({ placeholder, size = 'middle', suffix }: DatePickerProps) => (
	<input className={style.root} placeholder={placeholder} />
);

export default DatePicker;
