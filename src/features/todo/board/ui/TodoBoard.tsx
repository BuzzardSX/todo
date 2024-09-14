import { TodoList } from '../ui';
import { useBoard } from '../hooks';

const TodoBoard = () => {
	const board = useBoard();

	return (
		<div>
			{board.lists.map(
				({ id }) => <TodoList id={id} key={id} />
			)}
		</div>
	)
};

export default TodoBoard;
