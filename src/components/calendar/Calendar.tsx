import CalendarRow from '~/components/calendarRow';
import style from './Calendar.module.css';

const month = [1, 2, 4, 5];

const Calendar = () => (
	<div className={style.root}>
		<table>
			{month.map(() => <CalendarRow />)}
		</table>
	</div>
);

export default Calendar;
