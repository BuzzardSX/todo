import { createSlice } from '@reduxjs/toolkit';
import type { TodoList } from '../todoBoardFeature';

interface TodoBoardState {
	lists: TodoList[];
}

const initialState: TodoBoardState = {
	lists: [
		{
			id: 1,
			title: '',
			items: []
		},
		{
			id: 2,
			title: '',
			items: []
		},
		{
			id: 3,
			title: '',
			items: []
		}
	]
};

const todoBoardSlice = createSlice({
	name: 'todoBoard',
	initialState,
	reducers: {}
});

export default todoBoardSlice;

export type { TodoBoardState }
