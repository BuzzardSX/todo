import DatePickerDate from './DatePickerDate';

const week = [1, 2, 3, 4, 5, 6, 7];

const DatePickerWeek = () => (
	<tr>
		{week.map(() => <DatePickerDate />)}
	</tr>
);

export default DatePickerWeek;
