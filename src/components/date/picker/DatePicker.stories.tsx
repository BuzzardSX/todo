import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';
import { Theme } from '~/libs/react/components';

const meta: Meta<typeof DatePicker> = {
	component: DatePicker,
	decorators: (Story) => (
		<Theme>
			<div style={{ padding: '1em' }}>
				<Story />
			</div>
		</Theme>
	)
};

type Story = StoryObj<typeof meta>;

export const basic: Story = {
	args: {
		placeholder: 'Select date'
	}
};

export const large: Story = {
	args: {
		placeholder: 'Select date',
		size: 'large'
	}
};

export const small: Story = {
	args: {
		placeholder: 'Select date',
		size: 'small'
	}
}

export default meta;
