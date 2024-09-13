import { useAppSelector } from '../../../../store';
import { TodoItem } from '../ui';
import type { TodoListProps } from '../ui';

const TodoList = ({ id }: TodoListProps) => {
	const list = useAppSelector((state) => state.todoBoard.lists.find((list) => list.id == id));

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
