import { useReducer } from 'react';

export const useInitialValues = () => {
	const [state, dispatch] = useReducer(
		(state, action) => {
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

	return {
		name: 'Mike',
		age: 18
	};
};
