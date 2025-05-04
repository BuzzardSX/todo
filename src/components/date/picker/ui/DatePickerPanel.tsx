import DatePickerRow from './DatePickerRow';

const month = [1, 2, 4, 5];

const DatePickerPanel = () => (
	<table>
		{month.map(() => <DatePickerRow />)}
	</table>
);

export default DatePickerPanel;
