import { useAppDispatch, useAppSelector } from '~/app/store';
import { UserForm } from '~/forms';
import { UserAddButton, UserAddModal } from '~/features/user';
import homeSlice from '~/features/home/slice';

const initialValues = { age: 18 };

const HomePage = () => {
	const userModalVisible = useAppSelector(homeSlice.selectors.selectUserModalVisible);

	const dispatch = useAppDispatch();

	return (
		<div>
			<UserAddButton
				onClick={() => dispatch(homeSlice.actions.userModalShow())}
			/>
			<UserAddModal
				content={(
					<UserForm initialValues={initialValues} />
				)}
				onClose={() => dispatch(homeSlice.actions.userModalHide())}
				visible={userModalVisible}
			/>
		</div>
	);
}

export default HomePage;
