import {useCallback, useState} from 'react';

import Button from '../Button/Button.jsx';
import Logo from '../Logo/Logo.jsx';
import SelectUser from '../SelectUser/SelectUser.jsx';

import './Header.css';

const logos = ['./logo-2.svg', './logo-3.svg'];

export default function Header() {

	const [logoIndex, setLogoIndex] = useState(0);
	const toggleLogo = useCallback(() => {
		setLogoIndex(state => Number(!state));
	}, []);

	return (
		<>
			<Logo image={logos[logoIndex]} />
			<SelectUser />  
			<Button onClick={toggleLogo}>Сменить лого</Button>
		</>
	);
}