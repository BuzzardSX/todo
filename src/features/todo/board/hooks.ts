import { useAppSelector } from '../../../app/store';
import slice from './slice';

export const useBoard = () => {
	const board = useAppSelector(slice.selectSlice);

	return board;
}

export const useList = (id: number) => {
	const list = useAppSelector((state) => slice.selectors.selectList(state, id));

	return list;
};
