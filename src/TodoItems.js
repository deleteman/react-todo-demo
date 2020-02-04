import React from 'react'


const TodoItems = ({entries, deleteItem}) => {
	const createTasks = (item) => {
     	return <li key={item.key} onClick={() => deleteItem(item.key)}>{item.text}</li>
	}
  
	const todoentries = entries || []  
    const listitems = todoentries.map( createTasks.bind(this))

    return (<ul className="theList">{listitems}</ul>)
}

export default TodoItems