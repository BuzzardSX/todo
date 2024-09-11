import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'todoBoard',
	initialState: {
		lists: [1, 2, 3]
	},
	reducers: {}
});

export const { reducerPath, reducer } = slice;

export { TodoBoard as default } from './ui';
