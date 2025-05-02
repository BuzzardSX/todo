import { type ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import style from './DatePicker.module.css';

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
			{createPortal(<div className={`${popupClassName}`}>Popup</div>, document.body)}
		</>
	);
};

export default DatePicker;
