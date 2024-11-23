import { Picker } from '~/libs/date';

const pickerValue = Date.now();

const PickerStory = () => {
	return (
		<div>
			<div>
				<Picker value={pickerValue} />
			</div>
		</div>
	);
};

export default PickerStory;
