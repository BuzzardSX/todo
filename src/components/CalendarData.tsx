import cx from 'classnames';
import style from './CalendarRow.module.css';

interface CalendarDataProps {
	today?: boolean;
}

const CalendarData = ({ today = false }: CalendarDataProps) => (
	<div className={cx(style.today)}>{new Date().getDate()}</div>
);

export default CalendarData;
