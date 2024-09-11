import { configureStore } from '@reduxjs/toolkit';
import featuresSlice from '../features/featuresSlice';

const store = configureStore({
	reducer: {
		[featuresSlice.reducerPath]: featuresSlice.reducer
	}
});

export default store;
