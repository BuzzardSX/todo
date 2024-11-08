import { Modal } from 'antd-mobile';

const UserAddModal = ({ content, onClose, visible }) => {
	return (
		<Modal
			actions={[
				{
					key: 'cancel',
					text: 'Cancel'
				}
			]}
			closeOnMaskClick
			content={content}
			header='New user'
			onClose={onClose}
			showCloseButton
			visible={visible}
		/>
	);
};

export default UserAddModal;
