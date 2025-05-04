import CalendarCell from '~/components/calendarCell';

const week = [1, 2, 3, 4, 5, 6, 7];

const CalendarRow = () => (
	<tr>
		{week.map(() => <CalendarCell />)}
	</tr>
);

export default CalendarRow;
