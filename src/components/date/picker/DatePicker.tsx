import cx from 'classnames';
import {
	type FocusEventHandler,
	type ReactNode,
	useState
} from 'react';
import Popup from '~/components/popup'
import style from './DatePicker.module.css';
import { DatePickerPanel } from './ui';

type DatePickerSize = 'large' | 'middle' | 'small';

interface DatePickerProps {
	className?: string;
	inputClassName?: string;
	onFocus?: () => void;
	placeholder?: string;
	popupClassName?: string;
	showNow?: boolean;
	size?: DatePickerSize;
	suffix?: ReactNode;
}

const DatePicker = ({
	className,
	inputClassName,
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
			<div className={cx(style.root, className)}>
				<input
					className={cx(style.input, inputClassName)}
					onFocus={focusHandler}
					{...props}
				/>
				<div>{suffix}</div>
			</div>

			<Popup className={popupClassName} onClick={popupClickHandler} open={open}>
				<DatePickerPanel />
			</Popup>
		</>
	);
};

export default DatePicker;
