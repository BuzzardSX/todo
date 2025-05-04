import CalendarRow from '~/components/calendarRow';

const month = [1, 2, 4, 5];

const DatePickerPanel = () => (
	<table>
		{month.map(() => <CalendarRow />)}
	</table>
);

export default DatePickerPanel;
