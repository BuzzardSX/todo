import { Form } from 'antd-mobile';
import { UserForm } from '~/forms';
import { UserAddButton, UserAddModal } from '~/features/user';
import { useUserAddModalVisibility } from '~/features/home';

const initialValues = { age: 18 };

const HomePage = () => {
	const [userAddForm] = Form.useForm();

	const [
		userModalVisible,
		userModalShow,
		userModalHide
	] = useUserAddModalVisibility();

	return (
		<div>
			<UserAddButton onClick={userModalShow} />
			<UserAddModal
				content={(
					<UserForm
						form={userAddForm}
						initialValues={initialValues}
					/>
				)}
				onClose={userModalHide}
				visible={userModalVisible}
			/>
		</div>
	);
}

export default HomePage;
