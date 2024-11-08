import { useMemo, useReducer } from 'react';

type State = boolean;

type Show = { type: 'SHOW' };

type Hide = { type: 'HIDE' };

type Action = Show | Hide;

type ModalVisibility = [boolean, () => void, () => void];

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
		false
	);

	return [
		state,
		() => dispatch({ type: 'SHOW' }),
		() => dispatch({ type: 'HIDE' })
	];
};

export const useFormInitialValues = () => useMemo(
	() => ({ age: 18 }),
	[]
);
