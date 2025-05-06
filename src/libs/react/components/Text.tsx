import type { ReactNode } from 'react';
import style from './Ttext.module.css';

const Text = ({ children }: TextProps) => (
	<div className={style.root}>{children}</div>
);

export interface TextProps {
	children: ReactNode;
}

export default Text;
