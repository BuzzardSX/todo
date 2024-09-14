import { TodoList } from '../ui';
import { useBoard } from '../hooks';

const TodoBoard = () => {
	const { board, addList } = useBoard();

	return (
		<div>
			<div>
				{board.lists.map(
					({ id }) => <TodoList id={id} key={id} />
				)}
			</div>
			<div onClick={addList}>Click me!</div>
		</div>
	);
};

export default TodoBoard;
