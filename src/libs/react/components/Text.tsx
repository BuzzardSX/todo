import type { ReactNode } from 'react';
import style from './Text.module.css';

interface TextProps {
	children: ReactNode;
}

const Text = ({ children }: TextProps) => (
	<div className={style.root}>{children}</div>
);

export default Text;
