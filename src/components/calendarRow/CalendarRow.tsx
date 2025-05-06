import CalendarCell from '~/components/calendarCell';
import style from './CalendarRow.module.css';

const CalendarRow = () => (
	<tr className={style.root}>
		<CalendarCell />
		<CalendarCell />
		<CalendarCell />
		<CalendarCell today />
		<CalendarCell />
		<CalendarCell />
		<CalendarCell />
	</tr>
);

export default CalendarRow;
