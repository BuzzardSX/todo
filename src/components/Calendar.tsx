import style from './Calendar.module.css';
import { CalendarRow } from './components';

const Calendar = () => (
	<div className={style.root}>
		<table className={style.table}>
			<CalendarRow />
			<CalendarRow />
			<CalendarRow />
			<CalendarRow />
		</table>
	</div>
);

export default Calendar;
