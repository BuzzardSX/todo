import type { ReactNode } from 'react';

const Text = ({ children }: TextProps) => (
	<div>{children}</div>
);

export interface TextProps {
	children: ReactNode;
}

export default Text;
