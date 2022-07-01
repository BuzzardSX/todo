import { createSlice } from '@reduxjs/toolkit';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types';

interface State {
	Todos: Todo[];
}

const initialState: State = {
	Todos: [
		{
			text: '111 text',
			isCompleted: true
		}
	]
};

export const addTodo: CaseReducer<State, PayloadAction<string>> = (state, action) => {
	state.Todos.push({
		text: action.payload,
		isCompleted: false
	});
};

const slice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo
	}
});

export { default as List } from './List';

export default slice.reducer;
