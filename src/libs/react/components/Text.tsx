import type { ReactNode } from 'react';
import style from './text.module.css';

const Text = ({ children }: TextProps) => (
	<div className={style.root}>{children}</div>
);

export interface TextProps {
	children: ReactNode;
}

export default Text;
