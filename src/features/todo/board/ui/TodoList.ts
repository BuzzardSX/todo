import { createElement } from 'react';
import { useAppSelector } from '../../../../store';
import { TodoItem } from '../ui';

interface TodoListProps {
	id: number;
}

const TodoList = ({ id }: TodoListProps) => {
	const list = useAppSelector((state) => state.todoBoard.lists.find((list) => list.id == id));

	return createElement(
		'div',
		null,
		createElement('div', null, list.title),
		list.items.map(
			({ id }) => createElement(TodoItem, { key: id })
		)
	);
};

export default TodoList;
