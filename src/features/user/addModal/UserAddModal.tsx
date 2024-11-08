import { Modal } from 'antd-mobile';

const UserAddModal = ({ content, onClose, onSave, visible }) => (
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
		header='Add user'
		onAction={({ key }) => {
			switch (key) {
				case 'save': onSave();
			}

			onClose();
		}}
		onClose={onClose}
		showCloseButton
		visible={visible}
	/>
);

export default UserAddModal;
