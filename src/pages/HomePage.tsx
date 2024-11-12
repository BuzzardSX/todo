import { Suspense } from 'react';
import { Form } from 'antd-mobile';
import {
	LoadingUserForm,
	UserForm,
	type UserFormValues
} from '~/forms';
import UserAddModal from '~/modals/user/add';
import { UserAddButton } from '~/features/user';
import { useUserAddModalVisibility } from '~/features/home';

const HomePage = () => { 
	const [userAddForm] = Form.useForm<UserFormValues>();

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
					<Suspense fallback={<LoadingUserForm />}>
						<UserForm form={userAddForm} />
					</Suspense>
				)}
				onClose={userModalHide}
				onSave={() => userAddForm.submit()}
				visible={userModalVisible}
			/>
		</div>
	);
}

export default HomePage;
