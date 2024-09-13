import { useAppSelector } from '../../../store';

export const useList = (id: number) => {
	const list = useAppSelector(
		(state) => state.todoBoard.lists.find((list) => list.id == id)
	);

	return list;
};
