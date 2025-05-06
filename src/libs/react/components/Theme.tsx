import type { CSSProperties, ReactNode } from 'react';
import style from './theme.module.css';

interface ThemeProps {
	children: ReactNode;
	style?: CSSProperties;
}

const Theme = ({ children, ...props }: ThemeProps) => (
	<div className={style.root} style={props.style}>{children}</div>
);

export default Theme;
