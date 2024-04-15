import { useState } from 'react';
import Button from '../Button/Button';

import './JournalForm.css';

const JournalForm = ({ onSubmit }) => {
	const [validFormState, setValidFormState] = useState({
		title: true,
		date: true,
		text: true
	});
	const addPost = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isValid = true;
		if (!formProps.title?.trim().length) {
			setValidFormState(state => ({ ...state, title: false }));
			isValid = false;
		} else {
			setValidFormState(state => ({ ...state, title: true }));
		}
		if (!formProps.text?.trim().length) {
			setValidFormState(state => ({ ...state, text: false }));
			isValid = false;
		} else {
			setValidFormState(state => ({ ...state, text: true }));
		}
		if (!formProps.date) {
			setValidFormState(state => ({ ...state, date: false }));
			isValid = false;
		} else {
			setValidFormState(state => ({ ...state, date: true }));
		}
		if (!isValid) {
			return;
		}
		onSubmit(formProps);
	};
	return (
		<form className='journal-form' onSubmit={addPost}>
			<input name="title" type="text" className={`input ${validFormState.title ? '' : 'invalid'}`} />
			<input name="tag" type="text" />
			<input name="date" type="date" className={`input ${validFormState.date ? '' : 'invalid'}`} />
			<textarea name="text" id="" cols="30" rows="10" className={`input ${validFormState.text ? '' : 'invalid'}`}></textarea>
			<Button text='Сохранить' />
		</form>
	);
};

export default JournalForm;