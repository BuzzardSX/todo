import DatePickerCell from './DatePickerCell';

const week = [1, 2, 3, 4, 5, 6, 7];

const DatePickerRow = () => (
	<tr>
		{week.map(() => <DatePickerCell />)}
	</tr>
);

export default DatePickerRow;
