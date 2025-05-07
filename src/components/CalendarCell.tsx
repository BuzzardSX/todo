import cx from 'classnames';
import style from './CalendarCell.module.css';

interface CalendarCellProps {
	today?: boolean;
}

const CalendarCell = ({ today = false }: CalendarCellProps) => (
	<td className={cx(style.root, { [style.today]: today })}>
		{new Date().getDate()}
	</td>
);

export default CalendarCell;
