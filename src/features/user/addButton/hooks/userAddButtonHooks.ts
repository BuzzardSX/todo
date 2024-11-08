import { useMemo } from 'react';

export const useFormInitialValues = () => useMemo(
	() => ({ age: 18 }),
	[]
);
