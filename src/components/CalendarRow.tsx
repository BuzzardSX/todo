import { Suspense } from 'react';
import style from './CalendarRow.module.css';
import { CalendarCell } from './components';

const CalendarRow = () => (
	<tr className={style.root}>
		<Suspense fallback={null}>
			<CalendarCell />
		</Suspense>
		<Suspense fallback={null}>
			<CalendarCell />
		</Suspense>
		<Suspense fallback={null}>
			<CalendarCell />
		</Suspense>
		<Suspense fallback={null}>
			<CalendarCell today />
		</Suspense>
		<Suspense fallback={null}>
			<CalendarCell />
		</Suspense>
		<Suspense fallback={null}>
			<CalendarCell />
		</Suspense>
		<Suspense fallback={null}>
			<CalendarCell />
		</Suspense>
	</tr>
);

export default CalendarRow;
