const month = [1, 2, 4, 5];
const week = [1, 2, 3, 4, 5, 6, 7];

const DatePickerPanel = () => {
	return (
		<table>
			{month.map(() => (
				<tr>
					{week.map((n) => (
						<td>{n}</td>
					))}
				</tr>
			))}
		</table>
	);
};

export default DatePickerPanel;
