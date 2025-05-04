import DatePickerCell from './DatePickerCell';

const week = [1, 2, 3, 4, 5, 6, 7];

const DatePickerWeek = () => (
	<tr>
		{week.map(() => <DatePickerCell />)}
	</tr>
);

export default DatePickerWeek;
