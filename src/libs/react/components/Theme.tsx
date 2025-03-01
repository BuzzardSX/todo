import type { ReactNode } from 'react';

const Theme = ({ children }: ThemeProps) => (
	<div>{children}</div>
)

export interface ThemeProps {
	children: ReactNode;
}

export default Theme;
