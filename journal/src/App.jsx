import './App.css';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
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
function App() {
	const [items, setItems] = useState(INITIAL_DATA);
	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date)
		}]);
	};
	return (
		<div className='app'>

			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{items.map(el => (
						<CardButton>
							<JournalItem
								text={el.text}
								title={el.title}
								date={el.date}
							/>
						</CardButton>))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;
