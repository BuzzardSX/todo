import { useAppSelector, useAppDispatcher } from '../../../app/store';
import slice from './slice';

export const useBoard = () => {
	const { lists } = useAppSelector(slice.selectSlice);

	const dispatch = useAppDispatcher();

	return {
		lists,
		addList: (title) => dispatch(slice.actions.addList(title)),
		removeLastList: () => dispatch(slice.actions.removeLastList())
	};
}

export const useList = (id: number) => {
	const { title, items } = useAppSelector((state) => slice.selectors.selectList(state, id));

	return { title, items };
};
