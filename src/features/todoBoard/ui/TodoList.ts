import { createElement } from 'react';
import { TodoItem } from '../ui';

const TodoList = () => {
	const items = [1, 2, 3];

	return createElement(
		'div',
		null,
		items.map(
			() => createElement(TodoItem)
		)
	);
};

export default TodoList;
