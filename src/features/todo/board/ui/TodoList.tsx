import { useList } from '../hooks';
import { TodoItem } from '../ui';
import type { TodoListProps } from '../ui';

const TodoList = ({ id }: TodoListProps) => {
	const { title, items } = useList(id);

	return (
		<div>
			<div>{title}</div>
			<div>
				{items.map(
					({ id }) => <TodoItem key={id} />
				)}
			</div>
		</div>
	);
};

export default TodoList;
