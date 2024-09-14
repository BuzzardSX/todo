import { useAppSelector } from '../../../app/store';
import slice from './slice';

export const useList = (id: number) => {
	const list = useAppSelector((state) => slice.selectors.selectList(state, id));

	return list;
};
