import { createSlice } from '@reduxjs/toolkit';
import { Todo } from './types';
import reducers from './reducers';

export interface State {
	items: Todo[];
}

const initialState: State = {
	items: [
		{
			text: '111 text',
			isCompleted: true
		}
	]
};

const todo = createSlice({
	name: 'todo',
	initialState,
	reducers
});

export { default as List } from './List';

export default todo;
