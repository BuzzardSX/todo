import { Button, Modal } from 'antd-mobile';
import { UserForm } from '~/forms';
import {
	useFormInitialValues,
	useModalVisibility
} from './hooks';

const UserAddButton = () => {
	const [modalVisible, modalShow, modalClose] = useModalVisibility();

	const formInitialValues = useFormInitialValues();

	return (
		<div>
			<div>
				<Button color='primary' onClick={modalShow}>Add user</Button>
			</div>
			<div>
				<Modal
					closeOnMaskClick
					content={(
						<UserForm initialValues={formInitialValues} />
					)}
					onClose={modalClose}
					visible={modalVisible} />
			</div>
		</div>
	);
};

export default UserAddButton;
