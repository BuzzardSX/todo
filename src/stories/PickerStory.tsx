import { Picker } from '~/libs/date';
import { Modal } from '~/libs/react/components';
import { useValue } from './hooks';

const PickerStory = () => {
	const value = useValue();

	return (
		<div>
			<div>
				<Picker value={value} />
			</div>
			<div>
				<Modal open={true}>
					Modal content
				</Modal>
			</div>
		</div>
	);
};

export default PickerStory;
