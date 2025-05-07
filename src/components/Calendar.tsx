import { Suspense } from 'react';
import style from './Calendar.module.css';
import { CalendarRow } from './components';

const Calendar = () => (
	<div className={style.root}>
		<table className={style.table}>
			<Suspense fallback={null}>
				<CalendarRow />
			</Suspense>
			<Suspense fallback={null}>
				<CalendarRow />
			</Suspense>
			<Suspense fallback={null}>
				<CalendarRow />
			</Suspense>
			<Suspense fallback={null}>
				<CalendarRow />
			</Suspense>
		</table>
	</div>
);

export default Calendar;
