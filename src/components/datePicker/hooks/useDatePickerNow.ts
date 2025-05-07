import { useMemo } from 'react';

const useDatePickerNow = () => useMemo(
	() => Date.now(),
	[]
);

export default useDatePickerNow;
