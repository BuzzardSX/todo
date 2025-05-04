import CalendarCell from '~/components/calendarCell';
import style from './CalendarRow.module.css';

const week = [1, 2, 3, 4, 5, 6, 7];

const CalendarRow = () => (
	<tr className={style.root}>
		{week.map(() => <CalendarCell />)}
		<CalendarCell today />
	</tr>
);

export default CalendarRow;
