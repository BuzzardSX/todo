import { Modal } from 'antd-mobile';
import type { UserAddModalProps } from '../userFeatures';

const UserAddModal = ({ content, onClose, onSave, visible }: UserAddModalProps) => (
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
