import type { Meta, StoryObj } from '@storybook/react';
import CalendarRow from './CalendarRow';
import Theme from './Theme';

const meta: Meta<typeof CalendarRow> = {
	component: CalendarRow,
	decorators: (Story) => (
		<Theme>
			<div style={{ padding: '1em' }}>
				<Story />
			</div>
		</Theme>
	)
};

type Story = StoryObj<typeof meta>;

export const basic: Story = {};

export default meta;
