import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {

	const data = [
		{
			title: 'Подготовка к курсам',
			date: new Date(),
			text: 'Lorem ...'
		},
		{
			title: 'Поход',
			date: new Date(),
			text: 'Lorem ipsum...'
		}
	];

	return (
		<>
			<Button />
			<CardButton> + Новое воспоминание</CardButton>
			<CardButton>
				<JournalItem
					text={data[0].text}
					title={data[0].title}
					date={data[0].date}
				/>
			</CardButton>
			<CardButton>
				<JournalItem
					text={data[1].text}
					title={data[1].title}
					date={data[1].date}
				/>
			</CardButton>
		</>
	);
}

export default App;
