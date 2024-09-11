import { createSlice } from '@reduxjs/toolkit';

const todoBoardSlice = createSlice({
	name: 'todoBoard',
	initialState: {
		lists: [1, 2, 3]
	},
	reducers: {}
});

export default todoBoardSlice;
