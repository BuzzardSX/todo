interface CalendarDataProps {
	today?: boolean;
}

const CalendarData = ({ today = false }: CalendarDataProps) => (
	<div>{new Date().getDate()}</div>
);

export default CalendarData;
