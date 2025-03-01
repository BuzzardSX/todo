import type { ButtonProps } from './reactComponents';
import style from './Button.module.css';

const Button = ({ children, type = 'default' }: ButtonProps) => (
	<button className={style.button}>
		{children}
	</button>
);

export default Button;
