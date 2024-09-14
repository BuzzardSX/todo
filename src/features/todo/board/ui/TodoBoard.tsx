import { TodoList } from '../ui';
import { useBoard } from '../hooks';

const TodoBoard = () => {
	const { lists, addList } = useBoard();

	return (
		<div>
			<div>
				{lists.map(
					({ id }) => <TodoList id={id} key={id} />
				)}
			</div>
			<div onClick={() => addList('A New One')}>Click me!</div>
		</div>
	);
};

export default TodoBoard;
