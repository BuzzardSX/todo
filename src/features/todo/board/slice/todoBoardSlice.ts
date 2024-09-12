import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

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

export const useTodoBoardSelector = useSelector.withTypes<TodoBoardState>();

export default todoBoardSlice;

export type { TodoBoardState }
