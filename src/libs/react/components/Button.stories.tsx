import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '~/libs/react/components';
import Button from './Button';

const meta = {
	title: 'Button',
	component: Button,
	decorators: (Story) => (
		<Theme>
			<div style={{ padding: '1em' }}>
				<Story />
			</div>
		</Theme>
	)
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const defaultButton: Story = {
	args: {
		children: 'Default'
	}
};

export const primary: Story = {
	args: {
		children: 'Primary'
	}
};

export default meta;
