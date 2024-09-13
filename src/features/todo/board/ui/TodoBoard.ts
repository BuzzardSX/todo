import { createElement } from 'react';
import { useAppSelector } from '../../../../store';
import { TodoList } from '../ui';

const TodoBoard = () => {
	const lists = useAppSelector((state) => state.todoBoard.lists);

	return createElement(
		'div',
		null,
		lists.map(
			({ id }) => createElement(TodoList, { id, key: id })
		)
	)
};

export default TodoBoard;
