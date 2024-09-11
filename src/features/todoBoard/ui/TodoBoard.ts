import { createElement } from 'react';
import { TodoList } from '../ui';

const TodoBoard = () => {
	const lists = [1, 2, 3];

	return createElement(
		'div',
		null,
		lists.map(
			() => createElement(TodoList)
		)
	)
};

export default TodoBoard;
