import { Suspense } from 'react';
import { Form, Skeleton } from 'antd-mobile';
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
					<Suspense
						fallback={(
							<div>
								<Skeleton.Title />
								<Skeleton.Paragraph />
							</div>
						)}
					>
						<UserForm
							form={userAddForm}
							initialValues={initialValues}
						/>
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
