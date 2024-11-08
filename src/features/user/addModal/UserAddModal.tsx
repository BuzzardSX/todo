import { Modal } from 'antd-mobile';

const UserAddModal = ({ content, onClose, visible }) => {
	return (
		<Modal
			closeOnMaskClick
			content={content}
			header='New user'
			onClose={onClose}
			visible={visible}
		/>
	);
};

export default UserAddModal;
