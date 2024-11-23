import { Picker } from '~/libs/date';
import { useValue } from './hooks';

const PickerStory = () => {
	const value = useValue();

	return (
		<div>
			<div>
				<Picker value={value} />
			</div>
		</div>
	);
};

export default PickerStory;
