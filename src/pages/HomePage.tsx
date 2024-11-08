import { UserForm } from '~/forms';
import { UserAddButton, UserAddModal } from '~/features/user';
import { useHomeUserAddModalVisibility } from '~/features/home';

const initialValues = { age: 18 };

const HomePage = () => {
	const [
		userModalVisible,
		userModalShow,
		userModalHide
	] = useHomeUserAddModalVisibility();

	return (
		<div>
			<UserAddButton onClick={userModalShow} />
			<UserAddModal
				content={(
					<UserForm initialValues={initialValues} />
				)}
				onClose={userModalHide}
				visible={userModalVisible}
			/>
		</div>
	);
}

export default HomePage;
