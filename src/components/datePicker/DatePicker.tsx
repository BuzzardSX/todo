import cx from 'classnames';
import { type ReactNode, useState } from 'react';
import Input from '~/components/input';
import style from './DatePicker.module.css';
import Calendar from '../Calendar';
import Popup from '../Popup';

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
	suffixIcon?: ReactNode;
}

const DatePicker = ({
	className,
	inputClassName,
	onChange,
	onFocus,
	popupClassName,
	showNow = false,
	size = 'middle',
	suffixIcon = <>&#128197;</>,
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
				<div className={style.suffix}>{suffixIcon}</div>
			</div>

			<Popup className={popupClassName} onClick={popupClickHandler} open={open}>
				<Calendar />
			</Popup>
		</>
	);
};

export default DatePicker;
