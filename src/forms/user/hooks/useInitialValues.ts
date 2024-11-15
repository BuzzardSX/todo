import { useReducer } from 'react';

interface Values {
	name: string;
	age: number;
}

type State = Values;

type IncrementAge = { type: 'incrementAge' };

type Action = IncrementAge;

interface InitialValues {
	incrementAge: () => void;
	values: Values;
}

const initialValues: State = {
	name: 'Mike',
	age: 18
};

const useInitialValues: () => InitialValues = () => {
	const [state, dispatch] = useReducer(
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
		initialValues
	);

	return {
		values: state,
		incrementAge: () => dispatch({ type: 'incrementAge' })
	};
};

export default useInitialValues;
