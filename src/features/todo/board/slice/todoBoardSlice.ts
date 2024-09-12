import { createSlice } from '@reduxjs/toolkit';

interface TodoBoardState {
	lists: number[];
}

const initialState: TodoBoardState = {
	lists: [4, 5, 6]
};

const todoBoardSlice = createSlice({
	name: 'todoBoard',
	initialState,
	reducers: {}
});

export default todoBoardSlice;

export type { TodoBoardState }
