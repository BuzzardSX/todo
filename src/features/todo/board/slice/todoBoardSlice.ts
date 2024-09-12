import { createSlice } from '@reduxjs/toolkit';

interface TodoBoardState {
	listIds: number[];
}

const initialState: TodoBoardState = {
	listIds: [4, 5, 6]
};

const todoBoardSlice = createSlice({
	name: 'todoBoard',
	initialState,
	reducers: {}
});

export default todoBoardSlice;

export type { TodoBoardState }
