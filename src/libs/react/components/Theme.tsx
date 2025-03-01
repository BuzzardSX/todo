import type { ReactNode } from 'react';
import style from './Theme.module.css';

const Theme = ({ children }: ThemeProps) => (
	<div className={style.theme}>{children}</div>
)

export interface ThemeProps {
	children: ReactNode;
}

export default Theme;
