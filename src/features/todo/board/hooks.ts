import { useAppSelector, useAppDispatcher } from '../../../app/store';
import slice from './slice';

export const useBoard = () => {
	const board = useAppSelector(slice.selectSlice);

	const dispatch = useAppDispatcher();

	return {
		board,
		addList: () => dispatch(slice.actions.addList())
	};
}

export const useList = (id: number) => {
	const list = useAppSelector((state) => slice.selectors.selectList(state, id));

	return list;
};
