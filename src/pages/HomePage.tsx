import { useAppDispatch, useAppSelector } from '~/app/store';
import { UserForm } from '~/forms';
import { UserAddButton, UserAddModal } from '~/features/user';
import homeSlice from '~/features/home/slice';

const initialValues = { age: 18 };

const HomePage = () => {
	const userModalVisible = useAppSelector(homeSlice.selectors.selectUserModalVisible);

	return (
		<div>
			<div>
				<UserAddButton />
			</div>
			<div>
				<UserAddModal
					content={<UserForm initialValues={initialValues} />}
					onClose={() => {}}
					visible={userModalVisible} />
			</div>
		</div>
	);
}

export default HomePage;
