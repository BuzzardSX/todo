import CalendarCell from '~/components/calendarCell';

const week = [1, 2, 3, 4, 5, 6, 7];

const DatePickerRow = () => (
	<tr>
		{week.map(() => <CalendarCell />)}
	</tr>
);

export default DatePickerRow;
