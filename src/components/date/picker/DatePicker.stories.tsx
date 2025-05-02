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

export const antLike: Story = {
	args: {
		placeholder: 'Select date',
	}
};

export default meta;
