import { useReducer } from 'react';

interface Values {
	name: string;
	age: number;
}

type State = Values;

type InitialValues = [Values];

export const useInitialValues: () => InitialValues = () => {
	const [state] = useReducer(
		(state: State, action) => {
			switch (action.type) {
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
