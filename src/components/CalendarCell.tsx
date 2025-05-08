import style from './CalendarCell.module.css';

const CalendarCell = () => (
	<td className={style.root}>
		{new Date().getDate()}
	</td>
);

export default CalendarCell;
