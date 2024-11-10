import { useReducer } from 'react';

type State = boolean;

type Show = { type: 'show' };

type Hide = { type: 'hide' };

type Action = Show | Hide;

type ModalVisibility = [boolean, () => void, () => void];

const initialState: State = false;

export const useModalVisibility: () => ModalVisibility = () => {
	const [state, dispatch] = useReducer(
		(state: State, action: Action): State => {
			switch (action.type) {
				case 'show':
					return true;
				case 'hide':
					return false;
				default:
					return state;
			}
		},
		initialState
	);

	return [
		state,
		() => dispatch({ type: 'show' }),
		() => dispatch({ type: 'hide' })
	];
};
