import { useReducer } from 'react';

interface Values {
	name: string;
	age: number;
}

type State = Values;

type IncrementAge = { type: 'incrementAge' };

type Action = IncrementAge;

type InitialValues = [Values];

export const useInitialValues: () => InitialValues = () => {
	const [state] = useReducer(
		(state: State, action: Action) => {
			switch (action.type) {
				case 'incrementAge':
					return ({
						...state,
						age: state.age + 1
					})
				default:
					return state;
			}
		},
		{
			name: 'Mike',
			age: 18
		}
	);

	return [state];
};
