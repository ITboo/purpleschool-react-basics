import Button from '../Button/Button';

import './JournalForm.css';

const JournalForm = ({ onSubmit }) => {
	const addPost = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};
	return (
		<form className='journal-form' onSubmit={addPost}>
			<input name="title" type="text" />
			<input name="tag" type="text" />
			<input name="date" type="date" />
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text='Сохранить' onClick={() => console.log('OK')} />
		</form>
	);
};

export default JournalForm;