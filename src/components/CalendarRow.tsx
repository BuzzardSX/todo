import style from './CalendarRow.module.css';
import CalendarCell from './CalendarCell';

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
