import { combineReducers } from '@reduxjs/toolkit';
import todoBoardSlice from './board/todoBoardSlice';

export const reducer = combineReducers({
	[todoBoardSlice.reducerPath]: todoBoardSlice.reducer
});

export const reducerPath = 'todo';

export * from './todoFeatures';
