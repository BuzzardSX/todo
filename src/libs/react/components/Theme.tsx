import type { CSSProperties, ReactNode } from 'react';
import style from './Theme.module.css';

const Theme = ({ children, ...props }: ThemeProps) => (
	<div className={style.theme} style={props.style}>{children}</div>
)

export interface ThemeProps {
	children: ReactNode;
	style?: CSSProperties;
}

export default Theme;
