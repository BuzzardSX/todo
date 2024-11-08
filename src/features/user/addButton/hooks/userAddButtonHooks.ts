import { useMemo, useReducer } from 'react';

type State = boolean;

type Show = { type: 'SHOW' };

type Hide = { type: 'HIDE' };

type Action = Show | Hide;

export const userModalVisibility = () => {
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
