import { useWeek } from './hooks';
import type { PickerProps } from './date';
import style from './Picker.module.css';

const Picker = ({ value }: PickerProps) => {
	const week = useWeek(value);

	return (
		<div className={style.picker}>
			<div className={style.week}>
				{week.map(
					(day) => (
						<div className={style.day} key={day}>
							{day}
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Picker;