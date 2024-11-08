import { useMemo } from 'react';

export const useInitialValues = () => useMemo(
	() => ({ age: 18 }),
	[]
);
