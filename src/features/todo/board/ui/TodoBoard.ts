import { createElement } from 'react';
import { useAppSelector } from '../../../../store';
import { TodoList } from '../ui';

const TodoBoard = () => {
	const listIds = useAppSelector((state) => state.todoBoard.listIds);

	return createElement(
		'div',
		null,
		listIds.map(
			(id) => createElement(TodoList, { id })
		)
	)
};

export default TodoBoard;
