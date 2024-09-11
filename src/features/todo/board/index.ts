import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'todoBoard',
	initialState: {},
	reducers: {}
});

export const { reducerPath, reducer } = slice;

export { TodoBoard as default } from './ui';
