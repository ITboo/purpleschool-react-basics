import { useState } from 'react';
import Button from '../Button/Button';

import './JournalForm.css';

const JournalForm = () => {
	const [inputData, setInputData] = useState('');
	const inputChange = (e) => {
		setInputData(e.target.value);
	};
	const addPost = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};
	return (
		<form className='journal-form' onSubmit={addPost}>
			<input name="title" type="text" />
			<input name="tag" type="text"/>
			<input name="date" type="date" value={inputData} onChange={inputChange} />
			<textarea name="post" id="" cols="30" rows="10"></textarea>
			<Button text='Сохранить' onClick={()=>console.log('OK')} />
		</form>
	);
};

export default JournalForm;