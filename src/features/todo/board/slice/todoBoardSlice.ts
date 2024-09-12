import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const todoBoardSlice = createSlice({
	name: 'todoBoard',
	initialState,
	reducers: {}
});

export default todoBoardSlice;
