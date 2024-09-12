import { createElement } from 'react';
import { TodoList } from '../ui';
import { useTodoBoardSelector } from '../slice/todoBoardSlice';

const TodoBoard = () => {
	const listIds = useTodoBoardSelector((state) => state.listIds);

	return createElement(
		'div',
		null,
		listIds.map(
			(id) => createElement(TodoList, { id })
		)
	)
};

export default TodoBoard;
