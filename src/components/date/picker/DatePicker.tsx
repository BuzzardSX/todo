import { type ReactNode, useState } from 'react';
import style from './DatePicker.module.css';
import DatePickerPopup from './DatePickerPopup';

type DatePickerSize = 'large' | 'middle' | 'small';

interface DatePickerProps {
	className?: string;
	onFocus?: () => void;
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

	const focusHandler = () => setOpen(true);

	return (
		<>
			<input className={style.root} onFocus={focusHandler} {...props} />

			<DatePickerPopup open={open}>Popup</DatePickerPopup>
		</>
	);
};

export default DatePicker;
