import { useState } from 'react';
import { Picker } from '~/libs/date';
import { Modal } from '~/libs/react/components';
import { useValue } from './hooks';

const PickerStory = () => {
	const value = useValue();

	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div>
			<div>
				<Picker value={value} />
			</div>
			<div>
				<div>
					<button onClick={() => setModalOpen(() => true)}>Open</button>
				</div>
				<Modal open={modalOpen}>
					Modal content
				</Modal>
			</div>
		</div>
	);
};

export default PickerStory;
