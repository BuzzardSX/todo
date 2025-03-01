import type { ButtonProps } from './reactComponents';
import style from './Button.module.css';

const Button = ({
	children,
	type = 'default'
}: ButtonProps) => {
	const className = [style.button, style.primary].join(' ');

	return (
		<button className={className}>
			{children}
		</button>
	);
};

export default Button;
