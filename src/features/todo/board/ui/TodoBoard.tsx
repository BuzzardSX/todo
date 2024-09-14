import { useAppSelector } from '../../../../app/store';
import { TodoList } from '../ui';

const TodoBoard = () => {
	const lists = useAppSelector((state) => state.todoBoard.lists);

	return (
		<div>
			{lists.map(
				({ id }) => <TodoList id={id} key={id} />
			)}
		</div>
	)
};

export default TodoBoard;
