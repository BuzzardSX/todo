import type { CSSProperties, ReactNode } from 'react';
import style from './Theme.module.css';

const Theme = ({ children, ...props }: ThemeProps) => (
	<div className={style.theme} {...props}>{children}</div>
)

export interface ThemeProps {
	children: ReactNode;
	style?: CSSProperties;
}

export default Theme;
