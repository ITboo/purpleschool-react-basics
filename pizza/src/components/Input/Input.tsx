import {InputHTMLAttributes, forwardRef} from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	function Input({className, isValid = false, ...props}, ref) {

		return (
			<input
				{...props}
				ref={ref}
				className={cn(styles.input, className, {
					['invalid']: isValid
				})}/>
		);
	});

export default Input;