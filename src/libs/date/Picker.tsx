import type { PickerProps } from './date';

const Picker = ({ value }: PickerProps) => (
	<div className='lib-date-picker-week'>
		<div>{new Date(value).toString()}</div>
	</div>
);

export default Picker;
