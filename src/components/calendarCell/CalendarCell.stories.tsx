import type { Meta, StoryObj } from '@storybook/react';
import Theme from '~/components/theme';
import CalendarCell from './CalendarCell';

const meta: Meta<typeof CalendarCell> = {
	component: CalendarCell,
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

export default meta;
