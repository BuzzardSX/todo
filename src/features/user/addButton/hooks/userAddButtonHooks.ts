import { useReducer } from 'react';

type State = boolean;

type Show = { type: 'SHOW' };

type Hide = { type: 'HIDE' };

type Action = Show | Hide;

type ModalVisibility = [boolean, () => void, () => void];

const initialState: State = false;

export const useModalVisibility: () => ModalVisibility = () => {
	const [state, dispatch] = useReducer(
		(state: State, action: Action): State => {
			switch (action.type) {
				case 'SHOW':
					return true;
				case 'HIDE':
					return false;
				default:
					return state;
			}
		},
		initialState
	);

	return [
		state,
		() => dispatch({ type: 'SHOW' }),
		() => dispatch({ type: 'HIDE' })
	];
};
