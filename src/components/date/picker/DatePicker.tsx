import { type ReactNode, useState } from 'react';
import style from './DatePicker.module.css';
import DatePickerPopup from './DatePickerPopup';

type DatePickerSize = 'large' | 'middle' | 'small';

interface DatePickerProps {
	className?: string;
	placeholder?: string;
	popupClassName?: string;
	size?: DatePickerSize;
	suffix?: ReactNode;
}

const DatePicker = ({
	className,
	popupClassName,
	size = 'middle',
	suffix = null,
	...props
}: DatePickerProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<input className={style.root} {...props} />

			<DatePickerPopup open={open}>Popup</DatePickerPopup>
		</>
	);
};

export default DatePicker;
