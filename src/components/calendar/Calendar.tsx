import CalendarRow from '~/components/calendarRow';

const month = [1, 2, 4, 5];

const Calendar = () => (
	<table>
		{month.map(() => <CalendarRow />)}
	</table>
);

export default Calendar;
