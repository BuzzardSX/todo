import { useMemo } from 'react';

const useDatePickerNow = () => {
	return useMemo(
		() => Date.now(),
		[]
	);
};

export default useDatePickerNow;
