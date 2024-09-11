import { combineReducers } from '@reduxjs/toolkit';
import todoSlice from './todo/todoSlice'

const featuresSlice = {
	reducerPath: 'features',
	reducer: combineReducers({
		[todoSlice.reducerPath]: todoSlice.reducer
	})
};

export default featuresSlice;
