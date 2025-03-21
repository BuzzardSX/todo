import type { CSSProperties, ReactNode } from 'react';
import style from './theme.module.css';

const Theme = ({ children, ...props }: ThemeProps) => (
	<div className={style.root} style={props.style}>{children}</div>
)

export interface ThemeProps {
	children: ReactNode;
	style?: CSSProperties;
}

export default Theme;
