import DatePickerWeek from './DatePickerWeek';

const month = [1, 2, 4, 5];

const DatePickerPanel = () => (
	<table>
		{month.map(() => <DatePickerWeek />)}
	</table>
);

export default DatePickerPanel;
