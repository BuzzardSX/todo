import cx from 'classnames';
import style from './Input.module.css';

interface InputProps {
	className?: string;
	onFocus?: () => void;
	placeholder?: string;
}

const Input = ({ className, ...props }: InputProps) => (
	<input className={cx(style.root, className)} {...props} />
);

export default Input;
