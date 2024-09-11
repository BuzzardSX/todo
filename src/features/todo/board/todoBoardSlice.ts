import { createSlice } from '@reduxjs/toolkit';

const todoBoardSlice = createSlice({
	name: 'board',
	initialState: {
		lists: [4, 5, 6]
	},
	reducers: {}
});

export default todoBoardSlice;
