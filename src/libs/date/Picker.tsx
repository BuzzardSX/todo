import { useWeek } from './hooks';
import type { PickerProps } from './date';

const Picker = ({ value }: PickerProps) => {
	const week = useWeek(value);

	return (
		<div className='date-picker-week'>
			{week.map(
				(day) => (
					<div className='date-picker-day'>
						{day}
					</div>
				)
			)}
		</div>
	);
};

export default Picker;