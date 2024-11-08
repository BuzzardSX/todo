import { Modal } from 'antd-mobile';

const UserAddModal = ({ content, onClose, visible }) => {
	return (
		<Modal
			actions={[
				{
					key: 'save',
					text: 'Save',
					primary: true
				},
				{
					key: 'cancel',
					text: 'Cancel'
				}
			]}
			closeOnMaskClick
			content={content}
			header='Add new user'
			onClose={onClose}
			showCloseButton
			visible={visible}
		/>
	);
};

export default UserAddModal;
