import { useAppDispatch, useAppSelector } from '~/app/store';
import homeSlice from '../slice';

export const useHomeUserAddModalVisibility = () => {
	const visible = useAppSelector(
		homeSlice.selectors.selectUserModalVisible
	);

	const dispatch = useAppDispatch();

	return [
		visible,
		() => dispatch(homeSlice.actions.userModalShow()),
		() => dispatch(homeSlice.actions.userModalHide())
	];
};
