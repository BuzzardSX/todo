import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {}
});

type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
