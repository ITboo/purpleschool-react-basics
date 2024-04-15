import { useState } from 'react';
import Button from '../Button/Button';

import styles from './JournalForm.module.css';

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
		<form className={styles['journal-form']} onSubmit={addPost}>
			<input name="title" type="text" className={`${styles['input']} ${validFormState.title ? '' : styles['invalid']}`} />
			<input name="tag" type="text" />
			<input name="date" type="date" className={`${styles['input']} ${validFormState.date ? '' : styles['invalid']}`} />
			<textarea name="text" id="" cols="30" rows="10" className={`${styles['input']} ${validFormState.text ? '' : styles['invalid']}`}></textarea>
			<Button text='Сохранить' />
		</form>
	);
};

export default JournalForm;