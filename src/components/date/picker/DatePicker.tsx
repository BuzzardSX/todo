import style from './DatePicker.module.css';

interface DatePickerProps {
	placeholder?: string;
}

const DatePicker = ({ placeholder }: DatePickerProps) => (
	<input className={style.root} placeholder={placeholder} />
);

export default DatePicker;
