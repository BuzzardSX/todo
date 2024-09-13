import { createSlice } from '@reduxjs/toolkit';

interface TodoBoardState {
	lists: { id: number, title: string }[];
}

const initialState: TodoBoardState = {
	lists: [
		{
			id: 1,
			title: ''
		},
		{
			id: 2,
			title: ''
		},
		{
			id: 3,
			title: ''
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
