import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

interface TodoBoardState {
	lists: number[];
}

const todoBoardSlice = createSlice({
	name: 'todoBoard',
	initialState,
	reducers: {}
});

export default todoBoardSlice;

export type { TodoBoardState }
