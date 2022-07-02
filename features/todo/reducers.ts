import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { State } from '.';

const addTodo: CaseReducer<State, PayloadAction<string>> = (state, action) => {
	state.items.push({
		text: action.payload,
		isCompleted: false
	});
};

const checkTodo: CaseReducer<State, PayloadAction<string>> = (state, action) => {
	const item = state.items.find(i => i.text == action.payload);
	item!.isCompleted = !item!.isCompleted;
};

export default {
	addTodo,
	checkTodo
};
