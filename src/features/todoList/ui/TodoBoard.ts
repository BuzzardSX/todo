import { createElement } from 'react';
import { TodoItem } from '../ui';

const TodoBoard = () => {
	const lists = [1, 2, 3];

	return createElement(
		'div',
		null,
		lists.map(
			() => createElement(TodoItem)
		)
	)
};

export default TodoBoard;
