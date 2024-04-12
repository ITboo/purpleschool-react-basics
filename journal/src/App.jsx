import './App.css';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';

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
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
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
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;
