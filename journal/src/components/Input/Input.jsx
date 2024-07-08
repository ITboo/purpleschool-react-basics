import {forwardRef} from 'react';
import cn from 'classnames';
import './Input.css';

const Input = forwardRef(
	function Input({className, isValid = false, appearance='text', placeholder, ...props}, ref) {
		
		return (
			<input
				{...props}
				ref={ref}
				placeholder={placeholder}
				className={cn(className, 'input', {
					['invalid']: isValid,
					['input-title']: appearance === 'title'
				})}/> 
		);
	});

export default Input;