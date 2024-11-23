import type { PickerProps } from './date';

const Picker = ({ value }: PickerProps) => (
	<div>{new Date(value).toString()}</div>
);

export default Picker;
