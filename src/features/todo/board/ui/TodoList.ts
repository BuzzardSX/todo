import { createElement } from 'react';
import { TodoItem } from '../ui';

interface TodoListProps {
	id: number;
}

const TodoList = ({ id }: TodoListProps) => {
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
