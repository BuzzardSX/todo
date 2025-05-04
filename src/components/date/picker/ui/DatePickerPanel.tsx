import { useDatePickerNow } from '../hooks';

const month = [1, 2, 4, 5];
const week = [1, 2, 3, 4, 5, 6, 7];

const DatePickerPanel = () => {
	const now = useDatePickerNow();

	return (
		<table>
			{month.map(() => (
				<tr>
					{week.map(() => (
						<td>{new Date(now).getDate()}</td>
					))}
				</tr>
			))}
		</table>
	)
};

export default DatePickerPanel;
