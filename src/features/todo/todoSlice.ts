import { combineReducers } from '@reduxjs/toolkit';
import todoBoardSlice from './board/todoBoardSlice';

const todoSlice = {
	reducerPath: 'todo',
	reducer: combineReducers({
		[todoBoardSlice.reducerPath]: todoBoardSlice.reducer
	})
};

export default todoSlice;
