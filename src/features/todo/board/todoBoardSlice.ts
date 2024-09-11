import { createSlice } from '@reduxjs/toolkit';

const todoBoardSlice = createSlice({
	name: 'board',
	initialState: {
		lists: [1, 2, 3]
	},
	reducers: {}
});

export default todoBoardSlice;
