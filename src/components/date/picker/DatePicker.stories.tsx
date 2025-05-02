import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
	component: DatePicker
};

type Story = StoryObj<typeof meta>;

export const antLike: Story = {
	args: {
		placeholder: 'Select date'
	}
};

export default meta;
