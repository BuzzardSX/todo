import type { PickerProps } from './date';

const Picker = ({ value }: PickerProps) => (
	<div>{new Date(value).getDay()}</div>
);

export default Picker;
