import { createElement } from 'react';
import { TodoList } from '../ui';

const TodoBoard = () => {
	return createElement(
		'div',
		null,
		[].map(
			(id) => createElement(TodoList, { id })
		)
	)
};

export default TodoBoard;
