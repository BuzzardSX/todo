import { combineReducers } from '@reduxjs/toolkit';
import * as boardSlice from './board';

export const reducer = combineReducers({
	[boardSlice.reducerPath]: boardSlice.reducer
});

export const reducerPath = 'todo';

export * from './todoFeatures';
