import cx from 'classnames';
import {
	type FocusEventHandler,
	type ReactNode,
	useState
} from 'react';
import style from './DatePicker.module.css';
import { DatePickerPopup } from './ui';

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
	onFocus,
	popupClassName,
	size = 'middle',
	suffix = null,
	...props
}: DatePickerProps) => {
	const [open, setOpen] = useState(false);

	const focusHandler: FocusEventHandler<HTMLInputElement> = () => {
		setOpen(true);

		onFocus?.();
	};

	return (
		<>
			<input className={cx(style.root, className)} onFocus={focusHandler} {...props} />

			<DatePickerPopup open={open}>Popup</DatePickerPopup>
		</>
	);
};

export default DatePicker;
