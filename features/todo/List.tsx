import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../src/store';
import Item from './Item';
import todo from '.';

const List: FC = () => {
	const { actions } = todo;
	const { checkTodo } = actions;
	const dispatch = useDispatch();

	const items = useSelector((state: RootState) => state.todo.items);

	return (
		<div>
			{items.map(item => <Item value={item} />)}
		</div>
	);
};

export default List;
