import { useAppSelector } from '~/app/store';
import homeSlice from '../slice';

export const useHomeUserAddModalVisibility = () => {
	const visible = useAppSelector(
		homeSlice.selectors.selectUserModalVisible
	);

	return [visible];
};
