import { configureStore } from '@reduxjs/toolkit';
import * as board from '../features/todo/board';

const store = configureStore({
	reducer: {
		[board.reducerPath]: board.reducer
	}
});

export default store;
