import { createElement } from 'react';
import { useAppSelector } from '../../../../store';
import { TodoItem } from '../ui';

interface TodoListProps {
	id: number;
}

const TodoList = ({ id }: TodoListProps) => {
	const items = useAppSelector((state) => state.todoBoard.lists.find((list) => list.id == id).items);

	return createElement(
		'div',
		null,
		items.map(
			({ id }) => createElement(TodoItem, { key: id })
		)
	);
};

export default TodoList;
