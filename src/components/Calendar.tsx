import CalendarRow from './calendarRow';
import style from './Calendar.module.css';

const Calendar = () => (
	<div className={style.root}>
		<table>
			<CalendarRow />
			<CalendarRow />
			<CalendarRow />
			<CalendarRow />
		</table>
	</div>
);

export default Calendar;
