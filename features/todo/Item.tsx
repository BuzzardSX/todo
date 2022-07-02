import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from './types';
import todo from '.';

interface Props {
	value: Todo
}

const Item: FC<Props> = (props) => {
	const dispatch = useDispatch();

	const { value } = props;

	return (
		<div>
			<span>{value.text}</span>
			<input type="checkbox" checked={value.isCompleted} onChange={() => dispatch(todo.actions.checkTodo(value.text))} />
		</div>
	);
};

export default Item;
