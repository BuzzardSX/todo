import type { Meta, StoryObj } from '@storybook/react-vite';
import Calendar from './Calendar';
import Theme from './Theme';

const meta: Meta<typeof Calendar> = {
	component: Calendar,
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
