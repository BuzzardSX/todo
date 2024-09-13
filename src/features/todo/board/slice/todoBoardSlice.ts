import { createSlice } from '@reduxjs/toolkit';

interface TodoItem {
	id: number;
	text: string;
}

interface TodoList {
	id: number;
	title: string;
	items: TodoItem[];
}

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
