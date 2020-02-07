import React from 'react'

const TodoItems = ({entries, deleteItem}) => {
    const listitems = entries.map(entry => <li key={entry.key} onClick={() => deleteItem(entry.key)}>{entry.text}</li>)

    return <ul className="theList">{listitems}</ul>
}

export default TodoItems
