import { useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import { INITIAL_STATE, formReducer } from './JournalForm.state.js';
import styles from './JournalForm.module.css';

const JournalForm = ({ onSubmit }) => {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.text || !isValid.title) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit]);

	const onChange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
	};

	const addPost = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	return (
		<form className={styles['journal-form']} onSubmit={addPost}>
			<input onChange={onChange} value={values.title} name="title" type="text" className={`${styles['input']} ${isValid.title ? '' : styles['invalid']}`} />
			<input onChange={onChange} value={values.tag} name="tag" type="text" />
			<input onChange={onChange} value={values.date} name="date" type="date" className={`${styles['input']} ${isValid.date ? '' : styles['invalid']}`} />
			<textarea onChange={onChange} value={values.post} name="post" id="" cols="30" rows="10" className={`${styles['input']} ${isValid.text ? '' : styles['invalid']}`}></textarea>
			<Button text='Сохранить' />
		</form>
	);
};

export default JournalForm;