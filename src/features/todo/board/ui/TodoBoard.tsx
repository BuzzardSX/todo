import { TodoList } from '../ui';
import { useBoard } from '../hooks';

const TodoBoard = () => {
	const { lists, addList, removeLastList } = useBoard();

	return (
		<div>
			<div>
				{lists.map(
					({ id }) => <TodoList id={id} key={id} />
				)}
			</div>
			<div onClick={() => addList('Add a new one')}>Add a new one</div>
			<div onClick={() => removeLastList()}>Remoe last one</div>
		</div>
	);
};

export default TodoBoard;
