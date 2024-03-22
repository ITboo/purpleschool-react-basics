import './JournalItem.css';

const JournalItem = () => {
    const title = 'Подготовка к курсам';
    const date =new Date();
    const text = 'Lorem ...';
    return (
        <div className="journal-item">
            <h2 className="journal-item__header">{title}</h2>
            <div className="journal-item__body">
                <div className="journal-item__date">{date.toDateString()}</div>
                <div className="journal-item__text">{text}</div>
            </div>
        </div>
    )
}

export default JournalItem;