import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
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
			items: [
				{
					id: 1,
					text: 'One'
				},
				{
					id: 2,
					text: 'Two'
				}
			]
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
	reducers: {
		addList: (state, { payload }: PayloadAction<string>) => {
			state.lists.push({
				id: Date.now(),
				title: payload,
				items: []
			});
		}
	},
	selectors: {
		selectList: (state, id: number) => state.lists.find((list) => list.id == id)
	}
});

export default todoBoardSlice;

export type { TodoBoardState };
