import { useDatePickerNow } from '../hooks';

const week = [1, 2, 3, 4, 5, 6, 7];

const DatePickerWeek = () => {
	const now = useDatePickerNow();

	return (
		<tr>
			{week.map(() => (
				<td>{new Date(now).getDate()}</td>
			))}
		</tr>
	);
};

export default DatePickerWeek;
