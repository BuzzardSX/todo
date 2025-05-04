const week = [1, 2, 3, 4, 5, 6, 7];

const DatePickerPanel = () => {
	return (
		<tr>
			{week.map((n) => (
				<td>{n}</td>
			))}
		</tr>
	);
};

export default DatePickerPanel;
