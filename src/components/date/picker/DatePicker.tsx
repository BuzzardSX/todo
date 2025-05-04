import cx from 'classnames';
import {
	type FocusEventHandler,
	type ReactNode,
	useState
} from 'react';
import style from './DatePicker.module.css';
import { DatePickerPanel, DatePickerPopup } from './ui';

type DatePickerSize = 'large' | 'middle' | 'small';

interface DatePickerProps {
	className?: string;
	onFocus?: () => void;
	placeholder?: string;
	popupClassName?: string;
	showNow?: boolean;
	size?: DatePickerSize;
	suffix?: ReactNode;
}

const DatePicker = ({
	className,
	onFocus,
	popupClassName,
	showNow = false,
	size = 'middle',
	suffix = null,
	...props
}: DatePickerProps) => {
	const [open, setOpen] = useState(false);

	const focusHandler: FocusEventHandler<HTMLInputElement> = () => {
		setOpen(true);

		onFocus?.();
	};

	const popupClickHandler = () => setOpen(false);

	return (
		<>
			<input className={cx(style.root, className)} onFocus={focusHandler} {...props} />

			<DatePickerPopup onClick={popupClickHandler} open={open}>
				<DatePickerPanel />
			</DatePickerPopup>
		</>
	);
};

export default DatePicker;
