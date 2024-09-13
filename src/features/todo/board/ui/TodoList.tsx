import { useList } from '../hooks';
import { TodoItem } from '../ui';
import type { TodoListProps } from '../ui';

const TodoList = ({ id }: TodoListProps) => {
	const list = useList(id);

	return (
		<div>
			<div>{list.title}</div>
			<div>
				{list.items.map(
					({ id }) => <TodoItem key={id} />
				)}
			</div>
		</div>
	);
};

export default TodoList;
