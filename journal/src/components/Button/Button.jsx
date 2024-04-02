import { useState } from 'react';
import './Button.css';


const Button = () => {
	const [text, setText] = useState('Сохранить');
	const clicked = () => {
		setText(t=>t+' lol');
	};
	return (
		<button className='button accent' onClick={clicked}>{text}</button>
	);
};

export default Button;