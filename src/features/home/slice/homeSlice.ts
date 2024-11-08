import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userModalVisible: false
};

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {}
});

export default homeSlice;
