import type { Meta, StoryObj } from '@storybook/react-vite';
import Theme from './Theme';
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

export const today: Story = {
	args: {
		today: true
	}
};

export default meta;
