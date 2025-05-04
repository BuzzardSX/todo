import cx from 'classnames';
import { type ReactNode, useState } from 'react';
import Input from '~/components/input';
import Popup from '~/components/popup';
import style from './DatePicker.module.css';
import { DatePickerPanel } from './ui';

type DatePickerSize = 'large' | 'middle' | 'small';

interface DatePickerProps {
	className?: string;
	inputClassName?: string;
	onChange?: () => void;
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
	onChange,
	onFocus,
	popupClassName,
	showNow = false,
	size = 'middle',
	suffix = null,
	...props
}: DatePickerProps) => {
	const [open, setOpen] = useState(false);

	const focusHandler = () => {
		setOpen(true);

		onFocus?.();
	};

	const popupClickHandler = () => setOpen(false);

	return (
		<>
			<div className={cx(style.root, {
				[style.large]: size == 'large',
				[style.small]: size == 'small'
			}, className)}>
				<Input
					className={inputClassName}
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
