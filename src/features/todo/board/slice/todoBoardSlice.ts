import { createSlice } from '@reduxjs/toolkit';
import type { TodoList } from '../todoBoardFeature';

interface TodoBoardState {
	lists: TodoList[];
}

const initialState: TodoBoardState = {
	lists: [
		{
			id: 1,
			title: 'List One',
			items: [
				{
					id: 1,
					text: 'One'
				}
			]
		},
		{
			id: 2,
			title: 'List Two',
			items: []
		},
		{
			id: 3,
			title: 'List Three',
			items: []
		}
	]
};

const todoBoardSlice = createSlice({
	name: 'todoBoard',
	initialState,
	reducers: {},
	selectors: {
		selectList: (state, id: number) => state.lists.find((list) => list.id == id)
	}
});

export default todoBoardSlice;

export type { TodoBoardState };
